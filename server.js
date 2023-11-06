require('dotenv').config();
require("./dbConfig/dbConfig")
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bookRoute = require('./route/bookRoute');

const app = express();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send({ Server: 'Welcome To Book Management App' });
})
    .use(cors())
    .use(helmet())
    .use(express.json({ limit: '10mb' }))
    .use(express.urlencoded({ limit: '10mb', extended: true }))
    .use('/api/v1/book', bookRoute)


server.listen(process.env.PORT, () => console.log('Book Management App server is running on', process.env.PORT));