// Init the Pacient model
import {mongoose} from 'mongoose';                                                  // Import the mongoose module

const Schema = mongoose.Schema;                                                     // Create a schema object
const pacientSchema = new Schema({                                              // Create a new schema object

    name: {
        type: String, 
        required: [true, 'Pacient name is required']},      // Define the name field
        
   
    birthDate: {
        type: Date, 
        required: [true, 'Pacient birthDate is required']},      // Define the date field
    phoneNumber: {
        type: String, 
        required: [true, 'Pacient number is required']},    // Define the doctor field   
        
    email: {
            type: String, 
            required: [true, 'Email is required'],          // Define the email field
            unique:true
        },
    
    createdAt: {
        type: Date,
        default: Date.now},                                     // Define the createdAt field
});

const pacient = mongoose.model('Pacient', pacientSchema); // Create a model object

export default pacient;                                           // Export the model object