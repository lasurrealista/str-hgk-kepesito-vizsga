/**
 * Exercise: make School mongoose model
 */

 const mongoose = require('mongoose');

 const SchoolSchema = mongoose.Schema({
     _id: {
         type: String,
         required: false
     },
     name: {
         type: String,
         required: true
     },
     city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    classrooms: {
        type: [String],
        required: true
    },
 }, {
     timeStamps: true
 });
 
 module.exports = mongoose.model('school', SchoolSchema);
 


/*
export interface School {
  _id?:string;
  name:string;
  city: string;
  street: string;
  zipcode: number;
  classrooms?: string[];  // references for classroom entities
}
*/