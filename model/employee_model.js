const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    id: {type: String},
    employee_name: {type: String},
    employee_salary: {type: String},
    employee_age: {type: String},
    profile_image: {type:String},
});

module.exports = mongoose.model('Employee', employeeSchema);
