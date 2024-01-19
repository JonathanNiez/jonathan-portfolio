import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-400 shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="JonathanNiez Logo"
            /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Jonathan Niez
            </span>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0">
            <li>
              <Link
                href="/about"
                className="hover:scale-105 hover:font-black hover:bg-blue-400 duration-200 me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:scale-105 hover:font-black hover:bg-blue-400 duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-800">
          © 2024 Jonathan Niez . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
