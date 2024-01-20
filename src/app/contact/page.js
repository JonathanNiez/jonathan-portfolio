"use client";
import { useEffect } from "react";
import Image from "next/image";
import FacebookLogo from "../images/Facebook_Logo.png";
import GmailLogo from "../images/Gmail_Logo.png";
import WhatsAppLogo from "../images/WhatsApp_Logo.png";
import { NextSeo } from "next-seo";

export default function Contact() {
  useEffect(() => {
    document.title = "About | Jonathan Niez";
  });

  return (
    <div className="container">
      <NextSeo title="Contact | Jonathan Niez" />
      <div className="bg-white flex flex-col items-center justify-between my-5 py-3 px-4 sm:mx-2 max-sm:mx-2 rounded-lg shadow-lg">
        <p className="mb-5 font-medium">Get in touch with me</p>
        <div className="bg-white flex flex-row items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/mr.smoothy13"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform"
          >
            {" "}
            <Image className="md:w-16 sm:w-10 max-sm:w-10" src={FacebookLogo} />
          </a>
          <a
            href="#"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform"
          >
            {" "}
            <Image className="md:w-16 sm:w-10 max-sm:w-10" src={GmailLogo} />
          </a>
          <a
            href="#"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform"
          >
            {" "}
            <Image className="md:w-16 sm:w-10 max-sm:w-10" src={WhatsAppLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}
