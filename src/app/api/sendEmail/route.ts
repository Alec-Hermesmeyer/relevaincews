import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_USER = process.env.MAIL_USER;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER;

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  console.log('EMAIL_USER:', EMAIL_USER);
  console.log('EMAIL_PASS:', EMAIL_PASS);
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
