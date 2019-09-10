const express = require('express');
const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    db('cars').then(cars => {
        res.status(200).json(cars);
    });
});

server.post('/', (req, res) => {
    db('cars')
        .insert(req.body)
        .then(cars => {
            res.status(201).json(cars);
        });
});

module.exports = server;
