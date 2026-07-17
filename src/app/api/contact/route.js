import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // 2. Save to Supabase via Prisma
    const newContact = await prisma.contact.create({
      data: {
        name: name,
        email: email,
        subject: subject || '',
        message: message,
        status: 'Pending',
      },
    });

    console.log('Saved to Supabase successfully:', newContact);

    return NextResponse.json(
      { message: 'Message sent successfully!', data: newContact },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}