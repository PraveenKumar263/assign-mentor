// import mongoose
const mongoose = require('mongoose');

// create student schema
const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    currentMentor: {type: Number, default: null},
    prevMentor: {type: Number, default: null},
    id: {type: Number, required: true}
});

// create model and export
module.exports = new mongoose.model('Student', studentSchema, 'students');