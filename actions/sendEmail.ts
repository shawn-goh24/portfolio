"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahshawngoh@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: senderEmail as string,
      // text: message as string,
      // react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
