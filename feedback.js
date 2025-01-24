const mongoose = require('mongoose');

// Define the schema
const feedbackSchema = new mongoose.Schema({
    name: String,
    contactnumber: String,
    email: String,
    feedback: String,
});

// Export the model
module.exports = mongoose.model('Feedback', feedbackSchema);
