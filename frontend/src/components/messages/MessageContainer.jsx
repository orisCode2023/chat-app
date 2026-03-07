import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NoChatSelected from "./NoChatSelected";
function MessageContainer() {
    const noChatSelected = false;

  return (
    <div> 
        {noChatSelected ? (<NoChatSelected />) : 
        (
            <>
        <Messages />
        <MessageInput />
        </>
    )
}
    </div>
  )
}

export default MessageContainer