const nodemailer = require('nodemailer');

// const sendEmail = (options) => {
//   // 1 create a transport
//   const transport = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },

//     // activate gmail "less secure app" option
//   });
//   // 2 define the emial options
//   // 3send the email
// };

const sgMail = require('@sendgrid/mail');
const { resetPassword } = require('../controllers/authController');
sgMail.setApiKey(
  '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'
); // Set your SendGrid API key here

const sendEmail = async (options) => {
  const msg = {
    to: options.user.email, // User's email address
    // from: 'stellaliuca@gmail.com', // Your verified sender email address in SendGrid, i am gonna pass an obj here to change as Natours
    from: {
      name: 'Natours',
      email: 'stellaliuca@gmail.com',
    },

    subject: 'Password Reset',
    text: `Click the link to reset your password: ${options.link}`,
    // You can also use HTML content by using the 'html' property
  };

  try {
    await sgMail.send(msg);
    console.log('Password reset email sent');
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error('Error sending email');
  }
};

module.exports = sendEmail;
