const express = require('express');
const mentorRouter = express.Router();
const mentorController = require('../controller/mentorController');

// Define the route to create a mentor
mentorRouter.post('/createMentor', mentorController.createMentor);
// Define the root route for /api/v1/ and send a response
mentorRouter.get('/', (req, res) => {
    res.send("HI");
});

module.exports = mentorRouter;