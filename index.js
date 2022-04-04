require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const server = require('http').createServer(app)
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes'))

server.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})