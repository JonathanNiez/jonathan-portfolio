"use client";
import { useState } from "react";
import Image from "next/image";
import TPoseJonathan from "./images/T.png";
import Jonathan from "./images/me_capstone.png";
import TechStack from "./components/TechStack";
import FacebookLogo from "./images/Facebook_Logo.png";
import GmailLogo from "./images/Gmail_Logo.png";
import WhatsAppLogo from "./images/WhatsApp_Logo.png";
import Certificate1 from "./images/certificates/Sweep_Network_on_Cloud.png";
import Certificate2 from "./images/certificates/Sweep_The_Agile_Mindset.png";
import Certificate3 from "./images/certificates/Sweep_Data_Visualization_Part_1.png";
import Certificate4 from "./images/certificates/Sweep_Data_Visualization_Part_2.png";
import TailwindCSSLogo from "./images/TailwindCSS_Logo.png";
import UnityLogo from "./images/unity_logo.png";
import GodotLogo from "./images/godot_logo.png";
import RenPyLogo from "./images/renpy_logo.png";
import PhilippinesFlag from "./images/philippines_flag.png";
import { FiRefreshCcw } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function Home() {
  const [zoomStates, setZoomStates] = useState({});

  const zoomImage = (id) => {
    setZoomStates((prevZoomStates) => ({
      ...prevZoomStates,
      [id]: !prevZoomStates[id],
    }));
  };

  const certificates = [
    {
      id: 1,
      src: Certificate1,
    },
    {
      id: 2,
      src: Certificate2,
    },
    {
      id: 3,
      src: Certificate3,
    },
    {
      id: 4,
      src: Certificate4,
    },
  ];

  return (
    <div id="#">
      <div
        className="flex md:flex-row gap-2 md:justify-start md:items-start sm:justify-center 
      sm:items-center max-sm:justify-center max-sm:items-center sm:flex-col max-sm:flex-col bg-black text-gray-200 bg-opacity-60 my-5 h-auto py-2 px-3 rounded-lg shadow-lg slide-in-top"
      >
        <div>
          <Image
            className="rounded-lg shadow-lg swing-in-right-fwd md:w-52 sm:w-32 max-sm:w-32"
            src={TPoseJonathan}
          />
        </div>
        <div>
          <p className="text-white md:text-3xl font-medium sm:text-xl max-sm:text-xl">
            Hello, I'm Jonathan
          </p>
          <div className="flex items-center gap-2">
            <p className="font-medium md:text-lg sm:text-md max-sm:text-md">
              Full-stack Developer
            </p>
            <Image
              className="w-10"
              src={PhilippinesFlag}
              alt="Philippines Flag"
            />
          </div>
          <div className="flex md:flex-row sm:flex-col max-sm:flex-col">
            <Link
              target="_blank"
              href="https://www.canva.com/design/DAF7B-KH188/NbzJ9iRlrbjDYlj4um4Shg/edit?utm_content=DAF7B-KH188&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              View CV
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex flex-row items-center bg-white p-2 rounded-full shadow-md gap-3 w-auto">
            <a
              href="https://github.com/JonathanNiez"
              target="_blank"
              className="text-black font-medium hover:scale-105 transform transition-transform"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.facebook.com/mr.smoothy13"
              target="_blank"
              className="text-blue-700 font-medium hover:scale-105 transform transition-transform"
            >
              <FaFacebook size={35} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 justify-items-stretch my-5 sm:mx-2 max-sm:mx-2">
        <div className="col-span-2 flex flex-col gap-4 text-white drop-shadow-md">
          <div className="flex flex-col gap-2 bg-blue-700 shadow-md rounded-md py-2 px-3">
            <p className="slide-in-right text-3xl sm:texl-xl max-sm:text-xl font-bold ">
              Hello, I am Jonathan A. Niez Jr.
            </p>
            <p className="slide-in-left text-wrap font-medium md:text-lg sm:text-sm max-sm:text-sm">
              I am a 21 year old Programmer/Developer, I build websites, android
              both front-end and back-end development and edit photos and
              videos. I have experience few programming languages and web
              frameworks such as ReactJS, NextJS, Javascript, CSS, Java, Kotlin,
              Python, C++ and C#.
            </p>
            <p className="slide-in-left text-wrap font-medium md:text-lg sm:text-sm max-sm:text-sm">
              I can adapt, flexible and willing to learn new programming
              languages or frameworks to expand my knowledge.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            className=" sm:w-60 max-sm:w-60 rounded-lg shadow-md"
            src={Jonathan}
            alt="Jonathan"
          />
          <div className="slide-in-right bg-white hover:bg-gray-300 shadow-lg rounded-lg py-2 px-3 cursor-pointer">
            <FiRefreshCcw size={40} />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-3">
        <TechStack />
        <Experiences />
        <Education />
        <Projects />
      </div>

      <div className="container mx-auto my-5 bg-white shadow-lg rounded-lg py-4">
        <p className="text-center text-black font-medium md:text-3xl sm:text-xl my-3">
          Currently learning Game Development...
        </p>
        <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-4 pw-4">
          <a
            href="https://unity.com"
            target="_blank"
            className="hover:scale-105 transform transition-transform"
          >
            <Image className="md:w-60 sm:w-28 max-sm:w-32" src={UnityLogo} />
          </a>
          <a
            href="https://godotengine.org"
            target="_blank"
            className="hover:scale-105 transform transition-transform"
          >
            <Image className="md:w-60 sm:w-36 max-sm:w-36" src={GodotLogo} />
          </a>

          <a
            href="https://www.renpy.org"
            target="_blank"
            className="hover:scale-105 transform transition-transform"
          >
            <Image className="md:w-44 sm:w-24 max-sm:w-24" src={RenPyLogo} />
          </a>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center gap-2 bg-blue-600 py-3 px-2 shadow-lg rounded-lg sm:mx-2 max-sm:mx-2">
          <p className="text-white font-medium md:text-xl sm:text-lg max-sm:text-lg drop-shadow-md">
            Certificates
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 justify-items-center">
            {certificates.map(({ id, src }) => (
              <Image
                key={id}
                width={0}
                height={0}
                onClick={() => zoomImage(id)}
                className={`${
                  zoomStates[id]
                    ? "w-3/5 cursor-zoom-out outline outline-black absolute z-50"
                    : "w-60 cursor-zoom-in"
                } outline-black shadow-md rounded-md m-2 hover:scale-105 transform transition-transform`}
                src={src}
                alt={`Certificate ${id}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div
          id="contact"
          className="w-auto bg-blue-500 flex flex-col gap-4 items-center justify-between my-5 py-3 px-4 sm:mx-2 max-sm:mx-2 rounded-lg shadow-lg"
        >
          <p className="font-medium text-lg text-white drop-shadow-md">
            Contact me
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/mr.smoothy13"
              target="_blank"
              className="font-medium hover:scale-105 transform transition-transform drop-shadow-md"
            >
              {" "}
              <Image
                className="md:w-16 sm:w-10 max-sm:w-10"
                src={FacebookLogo}
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="font-medium hover:scale-105 transform transition-transform drop-shadow-md"
            >
              <Image className="md:w-16 sm:w-10 max-sm:w-10" src={GmailLogo} />
            </a>
            <a
              href="#"
              target="_blank"
              className="font-medium hover:scale-105 transform transition-transform drop-shadow-md"
            >
              <Image
                className="md:w-16 sm:w-10 max-sm:w-10"
                src={WhatsAppLogo}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="sm:mx-2 max-sm:mx-2 my-5 bg-white flex flex-col  justify-center items-center py-4 px-3 shadow-lg rounded-lg">
          <p className="font-medium md:text-lg sm:text:md max-sm:text:md mb-4">
            Made with:
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
    </div>
  );
}
