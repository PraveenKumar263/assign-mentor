const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');

const express = require('express');
const app = express();

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // start the server
        app.listen(PORT, () => {
            console.log(`Server running on port:${PORT}`)
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
    });