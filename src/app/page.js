"use client";
import { useState } from "react";
import Image from "next/image";
import TPoseJonathan from "./images/T.png";
import Jonathan from "./images/me_capstone.png";
import Magic from "./images/magic.png";
import TechStack from "./components/TechStack";
import FacebookLogo from "./images/Facebook_Logo.png";
import GmailLogo from "./images/Gmail_Logo.png";
import WhatsAppLogo from "./images/WhatsApp_Logo.png";
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

export default function Overview() {
  const [imageSrc, setImageSrc] = useState(Jonathan);
  const [isFlipped, setIsFlipped] = useState(false);

  const changeImage = () => {
    setImageSrc((prevSrc) => (prevSrc === Jonathan ? Magic : Jonathan));
    setIsFlipped(!isFlipped);
  };

  return (
    <div id="#">
      <div
        className="flex md:flex-row gap-2 md:justify-start md:items-start sm:justify-center 
      sm:items-center max-sm:justify-center max-sm:items-center sm:flex-col max-sm:flex-col
       bg-black text-gray-200 bg-opacity-60 my-5 h-auto py-2 px-3 rounded-lg shadow-lg slide-in-top"
      >
        <div>
          <Image
            className="rounded-lg shadow-lg swing-in-right-fwd md:w-52 sm:w-32 max-sm:w-32"
            src={TPoseJonathan}
          />
        </div>
        <div>
          <p className="font-montserrat-600 text-white md:text-3xl font-medium sm:text-xl max-sm:text-xl">
            Jonathan A. Niez Jr.
          </p>
          <div className="flex items-center gap-2">
            <p className="font-montserrat-500 md:text-lg sm:text-md max-sm:text-md">
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
          <div className="flex flex-col gap-2 bg-blue-sky_blue_1 shadow-md rounded-md py-2 px-3">
            <p className="font-montserrat-600 slide-in-right text-3xl sm:texl-xl max-sm:text-xl">
              Hello, I'm Jonathan.
            </p>
            <p className="font-montserrat-400 slide-in-left text-wrap md:text-lg sm:text-sm max-sm:text-sm">
              I am a 21 year old Programmer/Developer, I build websites, android
              both front-end and back-end development and edit photos and
              videos. I have experience few programming languages and web
              frameworks such as ReactJS, NextJS, Javascript, CSS, Java, Kotlin,
              Python, C++ and C#.
            </p>
            <p className="font-montserrat-400 slide-in-left text-wrap md:text-lg sm:text-sm max-sm:text-sm">
              I can adapt, flexible and willing to learn new programming
              languages or frameworks to expand my knowledge.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            className={`sm:w-60 max-sm:w-60 rounded-lg shadow-md ${
              isFlipped ? "flip-diagonal-2-br" : ""
            }`}
            src={imageSrc}
            alt="Jonathan"
          />
          <button
            onClick={changeImage}
            className="slide-in-right bg-white hover:bg-gray-300 shadow-lg rounded-lg py-2 px-3 cursor-pointer"
          >
            <FiRefreshCcw size={40} />
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-3">
        <TechStack />
        <Experiences />
        <Education />
        <Projects />
      </div>

      <div className="container mx-auto my-5 py-4">
        <p className="text-center text-white font-medium md:text-3xl sm:text-xl my-3">
          Currently learning Game Development...
        </p>
        <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-4 pw-4">
          <a
            href="https://unity.com"
            target="_blank"
            className="drop-shadow-lg hover:scale-105 transform transition-transform"
          >
            <Image
              className="md:w-60 sm:w-28 max-sm:w-32"
              src={UnityLogo}
              alt="unity_logo"
            />
          </a>
          <a
            href="https://godotengine.org"
            target="_blank"
            className="drop-shadow-lg hover:scale-105 transform transition-transform"
          >
            <Image
              className="md:w-60 sm:w-36 max-sm:w-36"
              src={GodotLogo}
              alt="godot_logo"
            />
          </a>

          <a
            href="https://www.renpy.org"
            target="_blank"
            className="drop-shadow-lg hover:scale-105 transform transition-transform"
          >
            <Image
              className="md:w-44 sm:w-24 max-sm:w-24"
              src={RenPyLogo}
              alt="renpy_logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
