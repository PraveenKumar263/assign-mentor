// import moongoose
const mongoose = require('mongoose');

// create mentor schema
const mentorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    students: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'students'}]
});

// create mentor model and export it
module.exports = mongoose.model('Mentor', mentorSchema, 'mentors');