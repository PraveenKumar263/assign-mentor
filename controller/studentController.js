const Student = require("../models/student");

const studentController = {
    createStudent: async (req, res) => {
        try {
            // get details from request body
            const { name, email } = req.body;

            // create a new student
            const newStudent = new Student({name, email});

            // save to db
            const savedStudent = await newStudent.save();
            return res.status(201).json({message: 'Student created successfully', student: savedStudent});
        } catch(error) {
            return res.status(500).send({message: error});
        }
    }
};

module.exports = studentController;