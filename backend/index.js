import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configure your email transport (use your real credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // replace with your Gmail address
    pass: process.env.GMAIL_PASS    // replace with your Gmail App Password
  }
});

app.post('/submit', async (req, res) => {
  const { subject, body } = req.body;
  try {
    await transporter.sendMail({
      from: 'YOUR_GMAIL_ADDRESS',
      to: ['orenkostin@gmail.com', 'joe.kostin@gmail.com'],
      subject: subject || 'Rental Application',
      text: body,
    });
    res.status(200).json({ message: 'Application sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
