// Nodemailer setup for sending emails
const nodemailer = require('nodemailer');

// Replace with your email service and credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail', 'hotmail', etc.
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_APP_PASSWORD' // Use an app password, not your main password
  }
});

module.exports = transporter;
