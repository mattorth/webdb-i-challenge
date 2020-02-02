const express = require('express');

// import router
const AccountRouter = require('./routers/accountRouter');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
// bind router
server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
    res.send(`<h3>Knex</h3>`);
});

module.exports = server;