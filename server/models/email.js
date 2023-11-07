const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  sender: {
    type: String, 
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

module.exports = mongoose.model("Email", EmailSchema);
