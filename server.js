const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://cyberbind.in', // Replace with your frontend domain
  methods: 'POST',
}));
app.use(bodyParser.json());

// Gmail credentials directly in the server.js file (avoid using .env)
const EMAIL_USER = 'cyberbind2024@gmail.com';  // Your Gmail address
const EMAIL_PASS = 'luddxwrsnfanslqr';          // Your Gmail app password

// Create transporter object for Nodemailer with SSL
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Gmail SMTP server
  port: 465,               // Use port 465 for SSL
  secure: true,            // Enable SSL
  auth: {
    user: 'cyberbind2024@gmail.com' ,      // Your Gmail address
    pass: 'luddxwrsnfanslqr',      // Your Gmail app password
  },
  tls: {
    rejectUnauthorized: false,  // Accept self-signed certificates
  },
  debug: true,                 // Enable debug mode for detailed logs
});

// POST route for /contact
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;  // Extract data from the request body

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's name and email
    to: EMAIL_USER,               // Recipient's email (your email)
    subject: 'New Contact Form Submission',
    text: `You have a new contact form submission from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);  // Log the error
      return res.status(500).json({ error: `Error sending email: ${error.message}` });  // Send detailed error message
    }
    console.log('Email sent:', info.response);  // Log successful email response
    res.status(200).json({ message: 'Thank you for contacting us!' });  // Send success response
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
