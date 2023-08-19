"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./ui/submitButton";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { toast } = useToast();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shawn_gzl@hotmail.com">
          shawn_gzl@hotmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            // toast({
            //   variant: "destructive",
            //   title: "Uh oh! Something went wrong.",
            //   description: error,
            // });
            alert(error);
            return;
          }

          alert("Email sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
      {/* <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button> */}
    </motion.section>
  );
}
