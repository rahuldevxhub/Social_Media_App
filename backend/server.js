import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './configs/db.js';
import {inngest,functions} from './inngest/index.js'
import { serve } from "inngest/express";

dotenv.config();

const app = express()
 await connectDb();

app.use(express.json());

app.use(cors())

app.get('/',(req,res) => {
    res.send('hello buddy')
});
app.use('/api/inngest', serve({client:inngest,functions}));



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)

})