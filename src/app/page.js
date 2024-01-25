import Image from "next/image";
import TPoseJonathan from "./images/T.png";
import { GiSkills } from "react-icons/gi";
import { FaAndroid, FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import ProgrammingIcon from "./images/programming.png";
import DevelopmentIcon from "./images/development_icon.png";
import PhotoshopIcon from "./images/photoshop_icon.png";
import PremiereProIcon from "./images/premiere_pro_icon.png";
import FilmoraIcon from "./images/filmora_icon.png";
import UnityLogo from "./images/unity_logo.png";
import GodotLogo from "./images/godot_logo.png";
import RenPyLogo from "./images/renpy_logo.png";
import PhilippinesFlag from "./images/philippines_flag.png";
import NoAILogo from "./images/no_ai.jpg";
import GithubLogo from "./images/Github_Logo.png";
import { FaJava } from "react-icons/fa";
import { SiFirebase, SiKotlin, SiMapbox, SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  TbBrandKotlin,
  TbBrandNextjs,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiSvelte } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiBlazor } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { FaPuzzlePiece } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
  title: "Home | Jonathan Niez",
};

export default function Home() {
  const codingSkills = [
    {
      id: 1,
      experiences: "Java",
      icon: <FaJava size={35} />,
    },
    {
      id: 2,
      experiences: "Kotlin",
      icon: <TbBrandKotlin size={35} />,
    },
    {
      id: 3,
      experiences: "Python",
      icon: <FaPython size={35} />,
    },
    {
      id: 4,
      experiences: "Javascript",
      icon: <IoLogoJavascript size={35} />,
    },
    {
      id: 5,
      experiences: "C#",
      icon: <SiCsharp size={35} />,
    },
    {
      id: 6,
      experiences: "C++",
      icon: <SiCplusplus size={35} />,
    },
    {
      id: 7,
      experiences: "CSS",
      icon: <FaCss3Alt size={35} />,
    },
    {
      id: 8,
      experiences: "HTML",
      icon: <FaHtml5 size={35} />,
    },
    {
      id: 9,
      experiences: "PHP",
      icon: <FaPhp size={35} />,
    },
    {
      id: 10,
      experiences: "SQL",
      icon: <PiFileSql size={35} />,
    },
    {
      id: 11,
      experiences: "Tailwind CSS",
      icon: <SiTailwindcss size={35} />,
    },
    {
      id: 12,
      experiences: "Bootstrap",
      icon: <FaBootstrap size={35} />,
    },
    {
      id: 13,
      experiences: "Android",
      icon: <IoLogoAndroid size={35} />,
    },
    {
      id: 14,
      experiences: "ReactJS",
      icon: <FaReact size={35} />,
    },
    {
      id: 15,
      experiences: "NextJS",
      icon: <TbBrandNextjs size={35} />,
    },
    {
      id: 16,
      experiences: "Svelte",
      icon: <SiSvelte size={35} />,
    },
    {
      id: 17,
      experiences: "Blazor",
      icon: <SiBlazor size={35} />,
    },
    {
      id: 18,
      experiences: "React Native",
      icon: <TbBrandReactNative size={35} />,
    },
    {
      id: 19,
      experiences: "Git",
      icon: <FaGitAlt size={35} />,
    },
    {
      id: 20,
      experiences: "Github",
      icon: <FaGithub size={35} />,
    },
    {
      id: 21,
      experiences: "Firebase",
      icon: <IoLogoFirebase size={35} />,
    },
    {
      id: 22,
      experiences: "Django",
      icon: <DiDjango size={35} />,
    },
    {
      id: 23,
      experiences: "Android Studio",
      icon: <SiAndroidstudio size={35} />,
    },
  ];

  const developmentTools = [
    {
      id: 1,
      experiences: "Photoshop",
      icon: <SiAdobephotoshop size={35} />,
    },
    {
      id: 2,
      experiences: "Premiere Pro",
      icon: <SiAdobepremierepro size={35} />,
    },
    {
      id: 3,
      experiences: "Figma",
      icon: <FaFigma size={35} />,
    },
  ];

  return (
    <div className="container mx-auto px-5">
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
              href="https://www.canva.com/design/DAF6tSClUcw/StYm9ayGKFCeAPdOB165Ig/edit?utm_content=DAF6tSClUcw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              View CV
            </Link>
            <Link
              href="/contact"
              className="jello-horizontal text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

      <div className="container mx-auto flex flex-col gap-3">
        <div className="container bg-blue-800 text-gray-200 flex md:flex-col sm:flex-col max-sm:flex-col justify-center items-center gap-3 rounded-lg shadow-lg py-4">
          <div>
            <div className="flex justify-center items-center gap-2">
              <BsStack size={35} />
              <p className="drop-shadow-md md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium scale-in-ver-bottom">
                Tech Stack
              </p>
            </div>
            <p className="drop-shadow-md md:text-lg sm:text-lg max-sm:text-lg text-center font-medium scale-in-ver-bottom">
              *encountered so far...*
            </p>
            <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-3 py-4">
              <div className="grid md:grid-cols-5 sm:grid-cols-3 max-sm:grid-cols-3 justify-items-center gap-3 bg-blue-700 px-5 py-3 rounded-lg shadow-lg m-2">
                {codingSkills.map(({ id, experiences, icon }) => (
                  <div
                    className="flex flex-col justify-center items-center hover:scale-105 transform transition-transform"
                    key={id}
                  >
                    {icon}
                    <p className="font-medium">{experiences}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-white drop-shadow-md md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium scale-in-ver-bottom">
              Development & Design Tools
            </p>

            <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-3 py-4">
              <div className="grid md:grid-flow-col md:auto-cols-max sm:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-3 bg-blue-700 px-5 py-3 rounded-lg shadow-lg m-2">
                {developmentTools.map(({ id, experiences, icon }) => (
                  <div
                    className="flex flex-col justify-center items-center hover:scale-105 transform transition-transform"
                    key={id}
                  >
                    {icon}
                    <p className="font-medium">{experiences}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-blue-800 flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 rounded-lg shadow-lg py-4 text-white drop-shadow-md ">
          <div className="flex gap-2 justify-center items-center">
            <FaCrown size={35} />
            <p className="md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium scale-in-ver-bottom">
              Experiences
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ol class="relative border-s border-white-200">
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                  M.Velasquez Bookkeeping and Consultancy Firm
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-white">
                  June 2021 to December 2023
                </time>
                <ul className="list-disc list-inside">
                  <li className="text-md">Assist Client's daily needs</li>
                  <li className="text-md">
                    Fix basic computer problems within the office
                  </li>
                </ul>
              </li>

              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                  Davao Wisdom Academy
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-white">
                  March 2019 to August 2020
                </time>
                <ul className="list-disc list-inside">
                  <li className="text-md">Assist with new student enrollees</li>
                  <li className="text-md">
                    Assist with IT Lab computer software and hardware
                    maintenance.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="container bg-blue-800 flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 rounded-lg shadow-lg py-4 text-white drop-shadow-md ">
          <div className="flex gap-2 justify-center items-center">
            <FaGraduationCap size={35} />
            <p className="md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium scale-in-ver-bottom">
              Education
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <ol class="relative border-s border-white-200">
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    Holy Cross of Davao College
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-white">
                    2019 - 2024
                  </time>
                  <ul className="list-disc list-inside">
                    <li className="text-md">Auditor (A.Y. 2022 – 2023)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="container bg-blue-800 flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 rounded-lg shadow-lg py-4 text-white drop-shadow-md ">
          <div className="flex gap-2 justify-center items-center">
            <FaPuzzlePiece size={35} />
            <p className="md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium scale-in-ver-bottom">
              Projects
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <ol class="relative border-s border-white-200">
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    Random Password Generator using Python
                  </h3>
                  <p class="block mb-2 text-sm font-normal leading-none text-white">
                    A very simple and easy random password generator using
                    Python than good beginners.
                  </p>
                  <FaPython size={35} />
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    Online Shopping App
                  </h3>
                  <p class="block mb-2 text-sm font-normal leading-none text-white">
                    A simple E-commerce app with easy to use UI and with chat
                    feature.
                  </p>
                  <div className="flex gap-2">
                    <FaJava size={35} />
                    <SiAndroidstudio size={35} />
                    <FaAndroid size={35} />
                  </div>
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    CareCabs
                  </h3>
                  <p class="block mb-2 text-sm font-normal leading-none text-white">
                    A simple E-commerce app with user-friendly UI and chat
                    feature.
                  </p>
                  <div className="flex gap-2">
                    <FaAndroid size={35} />
                    <SiAndroidstudio size={35} />
                    <FaJava size={35} />
                    <TbBrandKotlin size={35} />
                    <SiMapbox size={35} />
                    <SiFirebase size={35} />
                  </div>
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white "></span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                    Dormitory Management using Blazor
                  </h3>
                  <p class="block mb-2 text-sm font-normal leading-none text-white">
                    A dormitory management using Blazor with user-friendly UI.
                  </p>
                  <div className="flex gap-2">
                    <SiCsharp size={35} />
                    <SiBlazor size={35} />
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5 bg-white bg-opacity-60 shadow-lg rounded-lg py-4">
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
    </div>
  );
}
