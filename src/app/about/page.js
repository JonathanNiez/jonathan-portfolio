import Image from "next/image";
import TailwindCSSLogo from "../images/TailwindCSS_Logo.png";
import Jonathan from "../images/me_capstone.png";

export const metadata = {
  title: "About | Jonathan Niez",
};

export default function About() {
  return (
    <div className="container">
      <div className="flex flex-row gap-2 justify-center items-center my-5">
        <div className="bg-blue-500 shadow-md rounded-md py-2 px-3 text-white">
          <p className="text-3xl font-bold slide-in-top">
            Hello, I am Jonathan A. Niez Jr.
          </p>
          <p className="font-medium slide-in-left">
            I am a 21 year old Programmer/Developer, I build websites, android
            development and edit photos and videos. I have experience few
            programming languages and web frameworks such as ReactJS, NextJS,
            Javascript, CSS, Java, Kotlin, Python, C++ and C#.
          </p>
        </div>

        <div>
          <Image
            width={700}
            className="object-contain rounded-lg shadow-md scale-in-center"
            src={Jonathan}
            alt="Jonathan"
          />
        </div>
      </div>

      <div className="container mx-auto my-5 bg-white flex flex-col  justify-center items-center py-4 px-3 shadow-lg rounded-lg">
        <p className="font-medium md:text-lg sm:text:md max-sm:text:md mb-4">
          I built this portforlio using:
        </p>
        <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-4">
          <a
            href="https://nextjs.org"
            target="_blank"
            className="hover:scale-105 transform transition-transform"
          >
            <Image
              width={0}
              height={0}
              className="md:w-60 sm:w-36 max-sm:w-36"
              src="/next.svg"
            />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="hover:scale-105  transform transition-transform"
          >
            <Image
              width={0}
              height={0}
              className="md:w-60 sm:w-36 max-sm:w-36"
              src={TailwindCSSLogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
