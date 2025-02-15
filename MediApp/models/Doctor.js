// Initialize the Doctor model object
import {mongoose} from 'mongoose';                         // Import the mongoose module

const Schema = mongoose.Schema;                           // Create a schema object
const doctorSchema = new Schema({                         // Create a new schema object
   
    doctorId: {
        type: String, 
        required: [true, 'DoctorID is required']},       // Define the doctor field
        
    name: { 
        type: String, 
        required: [true, 'Name is required']},          // Define the name field
     
    login: {    
        type: String, 
        required: [true, 'Login is required'],         // Define the login field
        unique:true
    },    
    password: {
        type: String, 
        required: [true, 'Password is required']},      // Define the password field   
        
    medicalSpeciality: { 
        type: String, 
        required: [true, 'Medical Speciality is required']}, // Define the medicalSpeciality field
    
    medicalRegistration: {  
        type: String, 
        required: [true, 'Medical Registration is required'], // Define the medicalRegistration field
        unique:true
    },

    email: {
        type: String, 
        required: [true, 'Email is required'],          // Define the email field
        unique:true
    },

    phone: {
        type: String, 
        required: [true, 'Phone is required'],          // Define the phone field
        
    },

    createdAt: {
        type: Date,
        default: Date.now},                             // Define the createdAt field
});

const doctor = mongoose.model('Doctor', doctorSchema); // Create a model object

export default doctor;                            // Export the model object