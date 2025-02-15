import {mongoose} from 'mongoose';                                                  // Import the mongoose module

const Schema = mongoose.Schema;                                                     // Create a schema object
const appointmentSchema = new Schema({                                              // Create a new schema object
   
    date: {
        type: Date, 
        required: [true, 'Appointment Date is required']},      // Define the date field
    doctorId: {
        type: String, 
        required: [true, 'Appointment Doctor is required']},    // Define the doctor field  
    pacientId: {
        type: String, 
        required: [true, 'Appointment Pacient is required']},    // Define the pacient field
              
    createdAt: {
        type: Date,
        default: Date.now},                                     // Define the createdAt field
});

const appointment = mongoose.model('Appointment', appointmentSchema); // Create a model object

export default appointment;                                           // Export the model object