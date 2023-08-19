"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./ui/submitButton";
import { useToast } from "@/components/ui/use-toast";

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
      <p className="text-gray-700 -mt-6 dark:text-white/70">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shawn_gzl@hotmail.com">
          shawn_gzl@hotmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: error,
            });
            return;
          }
          toast({
            title: "Success!",
            description: "Email sent successfully.",
          });
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
