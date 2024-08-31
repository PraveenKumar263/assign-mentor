const express = require('express');
const assignerRouter = require('./routes/assignerRoutes');

const app = express();

// use the express middleware for parsing json data
app.use(express.json());

// mount /api/v1 on route
app.use('/api/v1', assignerRouter);

module.exports = app;