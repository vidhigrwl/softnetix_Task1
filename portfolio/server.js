const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to handle form submission
app.post('/send-email', (req, res) => {
    console.log('Received request:', req.body);

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vidhigrwl09@gmail.com', // Replace with your Gmail address
            pass: 'zrtc axwv xuvs higw' 
        }
    });

    const mailOptions = {
        from: email,
        to: 'vidhigrwl09@gmail.com',
        subject: `Portfolio Contact Form Submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email.');
        } else {
            console.log('Email sent:', info.response);
            return res.send('Message sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
