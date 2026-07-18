import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

const resend = new Resend("re_8YdkuHgA_PWrcZkzVDqBDFsgNiMgfJo1H");

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // 1. Save submission to Supabase via Prisma
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
        status: 'Pending',
      },
    });

    // 2. Send email alert via Resend
    try {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['onboarding@resend.dev'],
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h3>New Message Received!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', data: newContact },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}