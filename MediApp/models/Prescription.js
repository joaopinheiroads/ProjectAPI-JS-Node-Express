// Init the Pacient model
import {mongoose} from 'mongoose';                                                  // Import the mongoose module


const Schema = mongoose.Schema;                                                     // Create a schema object
const prescriptionSchema = new Schema({                                              // Create a new schema object

    date: {
        type: Date, 
        required: [true, 'Prescription Date is required']},      // Define the date field

    appointmentId: {
        type: String, 
        required: [true, 'Prescription Appointment is required']},    // Define the appointment field
    
    medicine: {
        type: String, 
        required: [true, 'Medicine is required']},    // Define the medicine field
    
    dosage: {
        type: String, 
        required: [true, 'Dosage is required']},    // Define the dosage field

    instructions: {
        type: String, 
        required: [true, 'Instructions are required']},    // Define the instructions field


    
    createdAt: {
        type: Date,
        default: Date.now},                                     // Define the createdAt field
});

const prescription = mongoose.model('Prescription', prescriptionSchema); // Create a model object

export default prescription;                                           // Export the model object