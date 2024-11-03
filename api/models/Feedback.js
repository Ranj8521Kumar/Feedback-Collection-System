// backend/models/feedbackModel.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  message: { type: String, required: true },
  agreeToPolicies: { type: Boolean, default: false },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
