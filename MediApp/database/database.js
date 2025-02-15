import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/medi-app');

const db = mongoose.connection;

db.on ('error', console.error.bind(console, 'connection error:'));  // Log an error message if the connection fails
db.once('open', function() {            
    console.log("Connected to the database!");                 // Log a message when the connection is successfully opened  
});          

export default db;