
const nodemailer = require('nodemailer');

// Create a transporter object using Gmail's SMTP server
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vidhigrwl09@gmail.com', // Replace with your Gmail address
        pass: 'zrtc axwv xuvs higw' // Use App Password if 2-Step Verification is enabled
    }
});

// Define email options
const mailOptions = {
    from: 'vidhigrwl09@gmail.com', // Replace with your Gmail address
    to: 'anilgrwl09@gmail.com', // Replace with a valid recipient email
    subject: 'Test Email',
    text: 'This is a test email.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending test email:', error);
    } else {
        console.log('Test email sent:', info.response);
    }
});
