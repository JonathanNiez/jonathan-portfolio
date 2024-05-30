import { FaJava } from "react-icons/fa";
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
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { FaLaravel } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa6";

export default function TechStack() {
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
    {
      id: 24,
      experiences: "Laravel",
      icon: <FaLaravel size={35} />,
    },
    {
      id: 25,
      experiences: " Vue",
      icon: <FaVuejs size={35} />,
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
    <div
      className="container flex items-center justify-center gap-3 py-4 text-white
     max-sm:flex-col sm:flex-col md:flex-col"
    >
      <div className="flex items-center justify-center gap-2">
        <BsStack size={35} />
        <p className="scale-in-ver-bottom text-center font-montserrat-600 drop-shadow-md max-sm:text-2xl sm:text-2xl md:text-4xl">
          Tech Stack
        </p>
      </div>
      <p className="scale-in-ver-bottom text-center font-montserrat-500 drop-shadow-md max-sm:text-lg sm:text-lg md:text-lg">
        *encountered so far...*
      </p>
      <div className="flex items-center justify-center gap-3 py-4 max-sm:flex-col sm:flex-col md:flex-row">
        <div
          className="m-2 grid justify-items-center gap-3 rounded-lg bg-blue-skt_blue_2 
        px-4 py-5 shadow-lg max-sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-5"
        >
          {codingSkills.map(({ id, experiences, icon }) => (
            <div
              className="flex transform flex-col items-center justify-center transition-transform hover:scale-105"
              key={id}
            >
              {icon}
              <p className="select-none text-center font-montserrat-500 max-sm:text-sm sm:text-sm md:text-lg">
                {experiences}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="scale-in-ver-bottom text-center font-montserrat-600 text-white drop-shadow-md max-sm:text-2xl sm:text-2xl md:text-4xl">
          Development & Design Tools
        </p>

        <div className="flex items-center justify-center gap-3 py-4 max-sm:flex-col sm:flex-col md:flex-row">
          <div
            className="m-2 grid justify-items-center gap-3 rounded-lg bg-blue-skt_blue_2 px-4 
          py-5 shadow-lg max-sm:grid-cols-1 sm:grid-cols-2 md:auto-cols-max md:grid-flow-col"
          >
            {developmentTools.map(({ id, experiences, icon }) => (
              <div
                className="flex transform flex-col items-center justify-center transition-transform hover:scale-105"
                key={id}
              >
                {icon}
                <p className="select-none text-center font-montserrat-500 max-sm:text-sm sm:text-sm md:text-lg">
                  {experiences}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
