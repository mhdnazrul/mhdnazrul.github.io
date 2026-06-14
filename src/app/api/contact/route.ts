import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validate inputs
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters.' },
                { status: 400 },
            );
        }
        if (
            !email ||
            typeof email !== 'string' ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return NextResponse.json(
                { error: 'Please provide a valid email address.' },
                { status: 400 },
            );
        }
        if (
            !message ||
            typeof message !== 'string' ||
            message.trim().length < 10
        ) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters.' },
                { status: 400 },
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: 'mhdnazrul511@gmail.com',
            replyTo: email,
            subject: `New message from ${name.trim()} — Portfolio`,
            html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e2e8f0; padding: 32px; border: 1px solid #2a2a2a; border-radius: 8px;">
          <h2 style="color: #a855f7; margin-bottom: 24px;">📬 New Contact Form Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 80px;">Name:</td>
              <td style="padding: 8px 0; color: #e2e8f0;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
              <td style="padding: 8px 0; color: #e2e8f0;"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; border: 1px solid #2a2a2a; border-radius: 4px;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px;">Message:</p>
            <p style="color: #e2e8f0; margin: 0; white-space: pre-wrap; line-height: 1.7;">${message.trim()}</p>
          </div>
          <p style="color: #555; font-size: 12px; margin-top: 24px;">Sent from your portfolio contact form.</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Email send error:', err);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 },
        );
    }
}
