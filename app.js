const express = require('express');
const mentorRouter = require('./routes/mentorRoutes');

const app = express();

// use the express middleware for parsing json data
app.use(express.json());

// Mount the mentor routes on /api/v1
app.use('/api/v1', mentorRouter);

module.exports = app;