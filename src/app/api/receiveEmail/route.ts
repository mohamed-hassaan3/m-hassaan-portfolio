import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.OWNER_GMAIL,
      pass: process.env.PASS_GMAIL,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.OWNER_GMAIL,
    subject: `New message from ${name}`,
    html: `
      <h3>New Email from: ${name}</h3>
      <p>Email: ${email}</p>
      <hr />
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Email sending failed" }, { status: 500 });
  }
}