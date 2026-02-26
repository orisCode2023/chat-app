import express from 'express'
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectDb from './db/dbConfig.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json())
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log(`server running on port ${PORT} `);
});