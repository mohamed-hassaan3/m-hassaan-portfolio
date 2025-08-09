"use server";

import nodemailer from "nodemailer";

export async function receiveEmail(
  email: string,
  name: string,
  message: string
) {
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
    subject: name,
    html: `
      <h3>New Email from: ${name}</h3>
      <hr />
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Email sending failed" };
  }
}
