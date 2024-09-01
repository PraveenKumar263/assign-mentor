const express = require('express');
const assignerRouter = express.Router();
const assignerController = require('../controller/assignerController');

// create a mentor
assignerRouter.post('/createMentor', assignerController.createMentor);

// create a student
assignerRouter.post('/createStudent', assignerController.createStudent);

// get mentors without a student
assignerRouter.get('/getMentorsWithoutStudents', assignerController.getMentorsWithoutStudents);

// get students without a mentor
assignerRouter.get('/getStudentsWithoutMentor', assignerController.getStudentsWithoutMentor);

// assign students to a mentor
assignerRouter.put('/assignStudents', assignerController.assignStudents);

// assign mentor to a student
assignerRouter.put('/assignMentor', assignerController.assignMentor);

// get students by mentor
assignerRouter.get('/getStudentsByMentor/:mentorId', assignerController.getStudentsByMentor);

// get previous mentor of a student
assignerRouter.get('/getPrevMentorofStudent/:studentId', assignerController.getPrevMentorofStudent);

// delete mentor by id
assignerRouter.delete('/deleteMentorById/:id', assignerController.deleteMentorById);

// delete student by id
assignerRouter.delete('/deleteStudentById/:id', assignerController.deleteStudentById);

module.exports = assignerRouter;
