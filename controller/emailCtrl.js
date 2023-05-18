const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, message) => {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP server details
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com', // Replace with your email address
        pass: 'your-password', // Replace with your email password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };
