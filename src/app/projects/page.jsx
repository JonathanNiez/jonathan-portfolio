"use client";
import { useEffect } from "react";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiBlazor } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { SiFirebase, SiMapbox } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export default function App() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Projects";
  }, []);

  const projects = [
    {
      id: 1,
      isPublic: true,
      repoLink: "https://github.com/JonathanNiez/Python-Password-Generator.git",
      title: "Random Password Generator using Python",
      description:
        "A simple and easy random password generator using Python that is good for beginners.",
      icon: <FaPython size={35} />,
    },
    {
      id: 2,
      isPublic: true,
      repoLink: "https://github.com/JonathanNiez/CC106-Project.git",
      title: "Android Online Shopping App",
      description:
        "A simple E-commerce mobile app with easy-to-use UI and chat feature.",
      icon: (
        <>
          <FaJava size={35} />
          <SiAndroidstudio size={35} />
          <FaAndroid size={35} />
        </>
      ),
    },
    {
      id: 3,
      isPublic: false,
      repoLink: null,
      title: "Capstone Project: CareCabs",
      description:
        "A Capstone project that lessens the burden of Senior Citizens and PWDs for their daily transportation problems. This app features a user-friendly UI with accessibility settings, ID scanning , and Map using Mapbox.",
      icon: (
        <>
          <FaAndroid size={35} />
          <SiAndroidstudio size={35} />
          <FaJava size={35} />
          <TbBrandKotlin size={35} />
          <SiMapbox size={35} />
          <SiFirebase size={35} />
        </>
      ),
    },
    {
      id: 4,
      isPublic: false,
      repoLink: null,
      title: "Capstone Project: CareCabs Admin",
      description:
        "The web version Admin side of the CareCabs mobile app can manage the drivers and the users of the app.",
      icon: (
        <>
          <FaReact size={35} />
          <SiFirebase size={35} />
          <SiTailwindcss size={35} />
        </>
      ),
    },
    {
      id: 5,
      isPublic: true,
      repoLink: "https://github.com/JonathanNiez/ADV104-Project.git",
      title: "Dormitory Management App using Blazor",
      description:
        "A basic and simple dormitory management application using Blazor with user-friendly UI.",
      icon: (
        <>
          <SiCsharp size={35} />
          <SiBlazor size={35} />
        </>
      ),
    },
    {
      id: 6,
      isPublic: false,
      repoLink: null,
      title: "Payroll Management System Mobile App",
      description:
        "An internship project mobile application that can manage the payroll of employees using React Native and Laravel as the backend.",
      icon: (
        <>
          <TbBrandReactNative size={35} />
          <FaLaravel size={35} />
        </>
      ),
    },
    {
      id: 7,
      isPublic: true,
      repoLink:
        "https://github.com/JonathanNiez/WS101---NextJS-To-Do-List-App.git",
      title: "To Do List App using NextJS",
      description:
        "A simple To Do List App using NextJS with user-friendly UI.",
      icon: <TbBrandNextjs size={35} />,
    },
    {
      id: 8,
      isPublic: true,
      repoLink: "https://github.com/JonathanNiez/shape-drawer.git",
      title: "Shape Drawer using ReactJS",
      description: "A simple shape drawer using ReactJS with user-friendly UI.",
      icon: <FaReact size={35} />,
    },
  ];

  return (
    <div className="container flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 py-4 text-white drop-shadow-md ">
      <div className="flex gap-2 justify-center items-center mb-10 scale-in-ver-bottom">
        <FaPuzzlePiece size={35} />
        <p className="drop-shadow-lg md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-600">
          Projects
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1 gap-4 ">
        {projects.map((project) => (
          <div
            className="flex flex-col text-white bg-cyan-500 p-3 gap-2 rounded-md shadow-md hover:scale-105 hover:bg-cyan-200 hover:text-gray-800 duration-200"
            key={project.id}
          >
            <h3 className="flex items-center text-lg font-montserrat-500">
              {project.title}
            </h3>
            <p className="mb-2 text-md text-wrap font-montserrat-400 leading-none">
              {project.description}
            </p>
            <div className="flex gap-2">{project.icon}</div>
            <div className="flex justify-center items-center mt-2">
              {project.isPublic ? (
                <div className="flex gap-2 items-center p-2 rounded-md bg-slate-50 ">
                  <FaEye size={20} color="black" />
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-montserrat-500 text-gray-800 hover:text-gray-600 cursor-pointer"
                  >
                    View Repository
                  </a>
                </div>
              ) : (
                <div className="flex gap-2 items-center p-2 rounded-md bg-slate-50 cursor-not-allowed">
                  <FaLock size={20} color="black" />
                  <p className="text-sm font-montserrat-500 text-red-700">
                    Private Repository
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
