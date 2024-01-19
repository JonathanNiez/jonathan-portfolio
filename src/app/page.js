import Image from "next/image";
import TPoseJonathan from "./images/T.png";
import { GiSkills } from "react-icons/gi";
import { FaAngleDoubleDown } from "react-icons/fa";
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
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";
import Link from "next/link";

export const metadata = {
  title: "Home | Jonathan Niez",
};

export default function Home() {
  const codingSkills = [
    {
      id: 1,
      programmingLanguage: "Java",
      icon: <FaJava size={25} />,
      skillLevel: "Intermediate",
      isLearning: true,
    },
    {
      id: 2,
      programmingLanguage: "Kotlin",
      icon: <SiKotlin size={25} />,
      skillLevel: "Beginner",
      isLearning: true,
    },
    {
      id: 3,
      programmingLanguage: "Python",
      icon: <FaPython size={25} />,
      skillLevel: "Intermediate",
      isLearning: true,
    },
    {
      id: 4,
      programmingLanguage: "Javascript",
      icon: <IoLogoJavascript size={25} />,
      skillLevel: "Intermediate",
      isLearning: false,
    },
    {
      id: 5,
      programmingLanguage: "C#",
      icon: <SiCsharp size={25} />,
      skillLevel: "Beginner",
      isLearning: false,
    },
    {
      id: 6,
      programmingLanguage: "C++",
      icon: <SiCplusplus size={25} />,
      skillLevel: "Intermediate",
      isLearning: false,
    },
    {
      id: 7,
      programmingLanguage: "CSS",
      icon: <FaCss3Alt size={25} />,
      skillLevel: "Intermediate",
      isLearning: true,
    },
    {
      id: 8,
      programmingLanguage: "PHP",
      icon: <FaPhp size={25} />,
      skillLevel: "Intermediate",
      isLearning: false,
    },
  ];

  const developmentSkills = [
    {
      id: 1,
      developmentName: "Android App",
      icon: <IoLogoAndroid size={25} />,
      skillLevel: "Advanced",
      isLearning: true,
    },
    {
      id: 2,
      developmentName: "ReactJS",
      icon: <FaReact size={25} />,
      skillLevel: "Intermediate",
      isLearning: false,
    },
    {
      id: 3,
      developmentName: "NextJS",
      icon: <TbBrandNextjs size={25} />,
      skillLevel: "Intermediate",
      isLearning: true,
    },
    {
      id: 4,
      developmentName: "Svelte",
      icon: <SiSvelte size={25} />,
      skillLevel: "Beginner",
      isLearning: true,
    },
  ];

  return (
    <div className="container">
      <div className="container mx-auto flex flex-col md:justify-start md:items-start sm:justify-center sm:items-center max-sm:justify-center max-sm:items-center bg-black bg-opacity-60 my-5 h-auto py-2 px-3 rounded-lg shadow-lg slide-in-top">
        <p className="text-white text-2xl font-medium sm:text-lg max-sm:text-lg">
          Hello, I'm Jonathan
        </p>
        <hr className="h-0.5 w-52 bg-white border-0" />
        <div className="flex justify-center items-center">
          <Image
            className="w-10"
            src={PhilippinesFlag}
            alt="Philippines Flag"
          />
        </div>
        <div className="flex md:flex-row sm:flex-col max-sm:flex-col">
          <Link
            href=""
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
        <div className="flex flex-row bg-white p-2 rounded-full shadow-md gap-3">
          <a
            href="https://github.com/JonathanNiez"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform"
          >
            {" "}
            <Image className="w-10" src={GithubLogo} />
          </a>
        </div>
      </div>

      <div className="container mx-auto bg-blue-400 shadow-md rounded-md py-5 px-3">
        <div className="flex flex-row justify-center items-center m-1">
          <h2 className="wobble-hor-bottom text-white drop-shadow-md md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium py-5 scale-in-ver-bottom">
            Skills
          </h2>
        </div>

        <div className="container mx-auto flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center my-5 gap-3 bg-white shadow-lg rounded-lg py-5">
          <Image
            className="rounded-lg shadow-lg swing-in-right-fwd"
            src={TPoseJonathan}
            width={250}
          />
          <div className="max-w-md swing-in-left-fwd">
            <GiSkills size={50} />
            <p className="font-medium">Full-stack Developer</p>
          </div>
        </div>

        <div className="container flex flex-col justify-center items-center px-4 gap-3">
          <div className="container bg-orange-300 flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-3 rounded-lg shadow-lg py-4">
            <div>
              <Image
                src={ProgrammingIcon}
                alt="programming icon"
                className="md:w-60 sm:w-32 max-sm:w-32"
              />
            </div>

            <div>
              <p className="text-center text-gray-800 font-medium text-xl py-2">
                Programming Languages
              </p>
              <div>
                {codingSkills.map(
                  ({
                    id,
                    programmingLanguage,
                    icon,
                    skillLevel,
                    isLearning,
                  }) => (
                    <div
                      className="grid grid-cols-3 gap-2 bg-yellow-300 hover:scale-105 transform transition-transform px-5 py-3 rounded-lg shadow-lg m-2"
                      key={id}
                    >
                      <div className="font-medium flex flex-row items-center">
                        {icon}
                        <p className="ml-2">{programmingLanguage}</p>
                      </div>
                      <p>{skillLevel}</p>
                      <div className="flex justify-center">
                        {isLearning ? (
                          <FaAngleDoubleUp color="green" size={30} />
                        ) : (
                          <FaAngleDoubleDown color="red" size={30} />
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="container bg-green-300 flex md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse justify-center items-center gap-3 rounded-lg shadow-lg py-4">
            <div>
              <p className="text-center text-gray-800 font-medium text-xl py-2">
                Frameworks and Developments
              </p>
              <div>
                {developmentSkills.map(
                  ({ id, developmentName, icon, skillLevel, isLearning }) => (
                    <div
                      className="grid grid-cols-3 gap-2 hover:scale-105 transform transition-transform bg-lime-300 px-5 py-3 rounded-lg shadow-lg m-2"
                      key={id}
                    >
                      <div className="font-medium flex flex-row items-center">
                        {icon}
                        <p className="ml-2">{developmentName}</p>
                      </div>
                      <p>{skillLevel}</p>
                      <div className="flex justify-center">
                        {isLearning ? (
                          <FaAngleDoubleUp color="green" size={30} />
                        ) : (
                          <FaAngleDoubleDown color="red" size={30} />
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <Image
                src={DevelopmentIcon}
                alt="development icon"
                className="md:w-60 sm:w-32 max-sm:w-32"
              />
            </div>
          </div>

          <div className="container bg-cyan-300 flex md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse justify-center items-center gap-3 rounded-lg shadow-lg py-4">
            <Image
              src={PhotoshopIcon}
              alt="adobe photoshop icon"
              className="shadow-md rounded-lg md:w-60 sm:w-32 max-sm:w-32"
            />
            <p className="text-gray-800 font-medium text-xl py-2">
              Photo Editing
            </p>
          </div>

          <div className="container bg-purple-300 flex md:flex-row sm:flex-col max-sm:flex-col justify-center items-center gap-3 rounded-lg shadow-lg py-4">
            <p className="text-gray-800 font-medium text-xl py-2">
              Video Editing
            </p>
            <Image
              src={PremiereProIcon}
              alt="abode premiere pro icon"
              className="shadow-md rounded-lg md:w-60 sm:w-32 max-sm:w-32"
            />
            <Image
              src={FilmoraIcon}
              alt="filmora icon"
              className="shadow-md rounded-lg md:w-60 sm:w-32 max-sm:w-32"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center bg-white rounded-lg shadow-lg py-3 my-5">
        <Image className="md:w-64 sm:w-32 max-sm:w-32" src={NoAILogo} />
        <p className="text-black font-black">I don't use any AI works</p>
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
