const express = require('express');
const mentorRouter = require('./routes/mentorRoutes');
const studentRouter = require('./routes/studentRoutes');

const app = express();

// use the express middleware for parsing json data
app.use(express.json());

// Mount the mentor routes on /api/v1
app.use('/api/v1', mentorRouter);
// Mount the student routes on /api/v1
app.use('/api/v1', studentRouter);

module.exports = app;