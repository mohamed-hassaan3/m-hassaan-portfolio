import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  // Read HTML template
  const htmlTemplatePath = path.join(
    process.cwd(),
    "public",
    "confirmationTemplate.html"
  );
  let htmlTemplate = "";
  try {
    htmlTemplate = fs.readFileSync(htmlTemplatePath, "utf-8");
  } catch (err) {
    if (err instanceof Error)
    return NextResponse.json({ success: false, error: "Template not found" }, { status: 500 });
  }
  const htmlContent = htmlTemplate.replace("{{clientName}}", name);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.OWNER_GMAIL,
      pass: process.env.PASS_GMAIL,
    },
  });

  const mailOptions = {
    from: `"Mohamed Hassaan" <${process.env.OWNER_GMAIL}>`,
    to: email,
    subject: "Confirmation - Thank You for Contacting Me",
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Confirmation email error:", error);
    return NextResponse.json({ success: false, error: "Confirmation email failed" }, { status: 500 });
  }
}
