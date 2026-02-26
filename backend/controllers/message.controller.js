import Conversation from "../models/conversation.modle.js";
import Message from '..models/message.modle.js';


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, reciverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, reciverId],
            });
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save( )])

        res.status(201).json(newMessage);
    } catch (error) {
        console.log('error in send message controller: ', error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}