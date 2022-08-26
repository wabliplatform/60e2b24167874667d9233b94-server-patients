
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
Underscoreid:String , 


pname:String , 


lname:String , 


amka:String , 


mphone:String 



})

module.exports = {
  Patient : mongoose.model('patient', patientSchema),
}

