"use server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const htmlTemplatePath = path.join(
  process.cwd(),
  "public",
  "confirmationTemplate.html"
);

const htmlTemplate = fs.readFileSync(htmlTemplatePath, "utf-8");

export const sendEmail = async (email: string, name: string) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.OWNER_GMAIL,
      pass: process.env.PASS_GMAIL,
    },
  });

  const htmlContent = htmlTemplate.replace("{{clientName}}", name);

  const mailOptions = {
    from: `"Mohamed Hassaan" ${process.env.OWNER_GMAIL}`,
    to: email,
    subject: "Confirmation - Thank You for Contacting Me",
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.log("Email failed to send", error);
    return { success: false, error: "Email failed" };
  }
};
