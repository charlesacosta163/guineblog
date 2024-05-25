import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'

import postRouter from './routes/postRouter.js'

const app = express()
const PORT = 5000

const mongoURL =  "mongodb://localhost:27017/posts-db"

app.use(express.json())
app.use(cors({origin: "http://localhost:3000"}))

app.use(postRouter)

async function startServer() {
    try {
      await mongoose.connect(mongoURL);
      console.log("Connected to MongoDB");
  
      // Start Express server
      app.listen(PORT, () => {
        console.log(`Server is running on localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
  
startServer();