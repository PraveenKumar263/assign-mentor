// import model
const Mentor = require('../models/mentor');
const Student = require('../models/student');

// create controller
const assignerController = {
    createMentor: async (req, res) => {
        try {
            // get details from request body
            const { name, email } = req.body;

            // create a new mentor
            const newMentor = new Mentor({ name, email });

            // save to db
            const savedMentor = await newMentor.save();
            return res.status(201).json({ message: 'Mentor created successfully', mentor: savedMentor });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
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
    },
    getMentorsWithoutStudents: async (req, res) => {
        try {
            // get mentors without students
            const mentors = await Mentor.find({ students: { $size: 0 } }, { __v: 0 });

            // check if no mentors found
            if (mentors.length === 0) {
                return res.status(400).json({ message: 'No mentors without students found' });
            }

            return res.json(mentors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getStudentsWithoutMentor: async (req, res) => {
        try {
            // get students without mentor
            const students = await Student.find({ mentor: { $size: 0 } }, { __v: 0 });

            // check if no mentors found
            if (students.length === 0) {
                return res.status(400).json({ message: 'No students without mentor found' });
            }

            return res.json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    assignStudents: async (req, res) => {
        try {
            const { mentorId, studentIds } = req.body;

            const mentor = await Mentor.findById(mentorId, '_id');
            // check if mentor exists
            if (!mentor) {
                return res.status(400).json({ message: 'Mentor not found' });
            }

            // check if studentIds exists
            const students = await Student.find({ _id: { $in: studentIds } });
            if (students.length !== studentIds.length) {
                return res.status(400).json({ message: 'Some students not found' });
            }

            // update mentor's students list
            await Mentor.updateOne(
                { _id: mentorId },
                { $addToSet: { students: { $each: studentIds } } }
            );

            // update students with mentor
            await Student.updateMany(
                { _id: { $in: studentIds } },
                [
                    {
                        $set: {
                            currentMentor: mentorId,
                            prevMentor: "$currentMentor"
                        }
                    }
                ]
            );

            return res.json({ message: 'Students assigned to mentor successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    assignMentor: async (req, res) => {
        try {
            const { mentorId, studentId } = req.body;

            // check if mentor exists
            const mentor = await Mentor.findById(mentorId, '_id');
            if (!mentor) {
                return res.status(404).json({ message: 'Mentor not found' });
            }

            // check if student exists
            const student = await Student.findById(studentId, '_id');
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }

            // update student with new mentor
            await Student.updateOne(
                { _id: studentId },
                { $set: { currentMentor: mentorId, prevMentor: student.currentMentor } }
            );

            // update mentor’s list of students
            await Mentor.updateOne(
                { _id: mentorId },
                { $addToSet: { students: studentId } }
            );

            return res.json({ message: 'Mentor assigned to student successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getStudentsByMentor: async (req, res) => {
        try {
            const { mentorId } = req.params;
            // get mentor's students detail
            const students = await Mentor.aggregate([
                { $match: { _id: mentorId } },
                { $unwind: '$students' },
                { 
                    $lookup: {
                        from: 'students',
                        localField: 'students',
                        foreignField: '_id',
                        as: 'studentDetails'
                    }
                },
                { $unwind: '$studentDetails' },
                { $replaceRoot: { newRoot: '$studentDetails' } }
            ]);
            if (students.length === 0) {
                return res.status(400).json({ message: 'No students found for the mentor' });
            }

            return res.json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getPrevMentorofStudent: async (req, res) => {
        try {
            const { studentId } = req.params;

            // find student 
            const student = await Student.findOne({ _id: studentId});
            if (!student) {
                return res.status(400).json({ message: 'Student not found' });
            }
            else if(student.prevMentor == null) {
                return res.status(400).json({ message: 'No previous mentor' });
            }
            
            const mentor = await Student.findOne({ _id: student.prevMentor});
            return res.json(mentor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = assignerController;