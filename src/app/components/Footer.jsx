"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TailwindCSSLogo from "../images/TailwindCSS_Logo.png";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    setCurrentYear(year);
  });

  return (
    <footer className="bg-blue-prussian_blue text-gray-200 shadow-lg mt-5">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* <img
              src="./images/favicon.png"
              className="h-8"
              alt="JonathanNiez Logo"
            /> */}
            <span class="self-center md:text-2xl max-sm:text-md sm:text-md font-montserrat whitespace-nowrap ">
              Jonathan A. Niez Jr.
            </span>
          </p>
          <div className="flex flex-row sm:mx-2 max-sm:mx-2 my-5 justify-center items-center py-4 px-3">
            <p className="font-montserrat-500 md:text-md sm:mr-2 max-sm:mr-2 sm:text-sm max-sm:text-sm mb-4">
              Made with:
            </p>
            <div className="flex flex-row justify-center items-center gap-2">
              <a
                href="https://nextjs.org"
                target="_blank"
                className="hover:scale-105 transform transition-transform"
              >
                <TbBrandNextjs size={35} />
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                className="hover:scale-105  transform transition-transform"
              >
                <SiTailwindcss size={35} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="font-montserrat block text-xs max-sm:text-center sm:text-center">
          © {currentYear} Jonathan A. Niez Jr. All Rights Reserved.
        </span>
        <span className="font-montserrat-400 block text-sm sm:text-center max-sm:text-center">
          To God be the Glory
        </span>
      </div>
    </footer>
  );
}
