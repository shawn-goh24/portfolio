import React from "react";
import { Button } from "./button";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending ? true : false}
      type="submit"
      className="group rounded-full outline-none transition-all w-fit gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100  dark:bg-white dark:bg-opacity-10 dark:text-gray-200"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </Button>
  );
}
