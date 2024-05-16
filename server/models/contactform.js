const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);
module.exports = ContactForm;
