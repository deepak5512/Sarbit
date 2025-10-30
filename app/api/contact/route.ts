import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, address, message } = await req.json();

  // Create a transporter object using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_EMAIL,
    subject: "New Contact Form Submission at Sarbit Innovations",
    html: `
      <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f9fafb;
            color: #333;
            margin: 0;
            padding: 30px;
          }
          .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 24px 30px;
          }
          h2 {
            color: #2563eb;
            margin-bottom: 16px;
          }
          p {
            margin: 8px 0;
            line-height: 1.5;
          }
          .label {
            font-weight: 600;
            color: #111827;
          }
          .message-box {
            background: #f3f4f6;
            border-left: 4px solid #3b82f6;
            padding: 12px 16px;
            border-radius: 4px;
            margin-top: 12px;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 24px;
            font-size: 13px;
            color: #6b7280;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>📩 New Contact Form Submission</h2>

          <p><span class="label">Name:</span> ${name}</p>
          <p><span class="label">Email:</span> ${email}</p>
          <p><span class="label">Phone:</span> ${phone || "N/A"}</p>
          <p><span class="label">Address:</span> ${address || "N/A"}</p>

          <p class="label">Message:</p>
          <div class="message-box">${message}</div>

          <div class="footer">
            This email was automatically generated from your website’s contact form.
          </div>
        </div>
      </body>
    </html>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
