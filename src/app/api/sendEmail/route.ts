import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_PASS = "rrfo psts unic qgnf"
const EMAIL_USER = "ahrmsmyr@gmail.com"
const EMAIL_RECEIVER = "lisa.henry@relevaince.ai"

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  // Nodemailer setup for Gmail
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Ensure this is set to 'Gmail'
    auth: {
      user: EMAIL_USER, // Make sure these are set correctly
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL_USER, // Sender email address
      to: EMAIL_RECEIVER, // Receiver email address
      subject: 'Demo Request',
      html: `<p>You have a new demo request from ${email}:</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
