import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


// const EMAIL_PASS = "rrfo psts unic qgnf"
// const EMAIL_USER = "ahrmsmyr@gmail.com"
// const EMAIL_RECEIVER = "lisa.henry@relevaince.ai"
dotenv.config();
export async function POST(req: NextRequest) {
  const { email, message } = await req.json();
  

  // Nodemailer setup for Gmail
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Ensure this is set to 'Gmail'
    auth: {
      user: process.env.MAIL_USER, // Make sure these are set correctly
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER, // Sender email address
      to: process.env.EMAIL_RECEIVER, // Receiver email address
      subject: 'Demo Request',
      html: `<p>You have a new demo request from ${email}:</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
