// import model
const Mentor = require('../models/mentor');

// create controller
const mentorController = {
    createMentor: async (req, res) => {
        try {
            // get details from request body
            const { name, email } = req.body;

            // create a new mentor
            const newMentor = new Mentor({name, email});

            // save to db
            const savedMentor = await newMentor.save();
            return res.status(201).json({ message: 'Mentor created successfully', mentor: savedMentor });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = mentorController;