'use strict';

const express = require('express');

const { getAll, getOne }= require('./db');
const App = require('./App');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    //res.send('Welcome to the Viaplay lunchbot API');
    res.send(App);
});

app.get('/api/list', async (req, res) => {
    try {
        res.send(await getAll());
    } catch( error ) {
        res.send(error);
    }
});

app.get('/api/restaurant/:id', async (req, res) => {
    try {
        res.send(await getOne(req.params.id));
    } catch( error ) {
        res.send(error);
    }
});

app.listen(port, () => console.log(`Server is running on port: ${port}!`))