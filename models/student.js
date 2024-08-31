// import mongoose
const mongoose = require('mongoose');

// create student schema
const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    currentMentor: {type: mongoose.Schema.Types.ObjectId, ref: 'Mentor'},
    prevMentor: {type: mongoose.Schema.Types.ObjectId, ref: 'Mentor'},
});

// create model and export
module.exports = new mongoose.model('Student', studentSchema, 'students');