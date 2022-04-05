import 'dotenv/config'
import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
const app: Application = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})