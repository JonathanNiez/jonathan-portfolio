"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    setCurrentYear(year);
  });

  return (
    <footer className="bg-blue-900 text-gray-200 shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="JonathanNiez Logo"
            /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Jonathan Niez
            </span>
          </p>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © {currentYear} Jonathan Niez . All Rights Reserved.
        </span>
        <span className="block text-sm sm:text-center max-sm:text-center">
          To God be the Glory
        </span>
      </div>
    </footer>
  );
}
