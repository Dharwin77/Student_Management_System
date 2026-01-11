const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    roll: String,
    department: String,
    email: String,
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;