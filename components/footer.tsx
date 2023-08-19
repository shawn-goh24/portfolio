import React from "react";

export default function Footer() {
  return (
    <footer className="mb-1 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">
        &copy; Shawn. All rights reservered.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
