import Link from "next/link";

export default function Footer() {
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0">
            <li>
              <Link
                href="/about"
                className="px-4 py-2 hover:scale-105 hover:font-black hover:bg-blue-500 hover:rounded-lg duration-200 me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-4 py-2 hover:scale-105 hover:font-black hover:bg-blue-500 hover:rounded-lg duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2024 Jonathan Niez . All Rights Reserved.
        </span>
        <span className="block text-sm  sm:text-center ">
          To God be the Glory
        </span>
      </div>
    </footer>
  );
}
