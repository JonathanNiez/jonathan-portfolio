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

export default function Projects() {
  const projects = [
    {
      id: 1,
      children: (
        <>
          <h3 class="flex items-center text-lg font-montserrat-500">
            Random Password Generator using Python
          </h3>
          <p class="mb-2 text-md text-wrap font-montserrat-400 leading-none">
            A very simple and easy random password generator using Python that
            is good for beginners.
          </p>
          <FaPython size={35} />
        </>
      ),
    },
    {
      id: 2,
      children: (
        <>
          <h3 class="flex items-center text-lg font-montserrat-500 gap-2">
            Online Shopping App
          </h3>
          <p class=" mb-2 text-md text-wrap font-montserrat-400 leading-none">
            A simple E-commerce mobile app with easy to use UI and with chat
            feature.
          </p>
          <div className="flex gap-2">
            <FaJava size={35} />
            <SiAndroidstudio size={35} />
            <FaAndroid size={35} />
          </div>
        </>
      ),
    },
    {
      id: 3,
      children: (
        <>
          <h3 class="flex items-center text-lg font-montserrat-500">
            CareCabs
          </h3>
          <p class="mb-2 text-md text-wrap font-montserrat-400 leading-none">
            A mobile app Capstone project that lessens the burden of Senior
            Citizens and PWDs for their daily transportation problems. This app
            features a user-friendly UI with accessibility settings, ID scanning
            and Map using Mapbox.
          </p>
          <div className="flex gap-2">
            <FaAndroid size={35} />
            <SiAndroidstudio size={35} />
            <FaJava size={35} />
            <TbBrandKotlin size={35} />
            <SiMapbox size={35} />
            <SiFirebase size={35} />
          </div>
        </>
      ),
    },
    {
      id: 4,
      children: (
        <>
          <h3 class="flex items-center text-lg font-montserrat-500">
            CareCabs Admin
          </h3>
          <p class="mb-2 text-md text-wrap font-montserrat-400 leading-none">
            The Admin side of the CareCabs mobile app that can manage the
            drivers and the users of the app.
          </p>
          <div className="flex gap-2">
            <FaReact size={35} />
            <SiFirebase size={35} />
          </div>
        </>
      ),
    },
    {
      id: 5,
      children: (
        <>
          <h3 class="flex items-center mb-1 text-lg font-montserrat-500">
            Dormitory Management App using Blazor
          </h3>
          <p class="block mb-2 text-sm font-montserrat-400 leading-none">
            A basic and simple dormitory management application using Blazor
            with user-friendly UI.
          </p>
          <div className="flex gap-2">
            <SiCsharp size={35} />
            <SiBlazor size={35} />
          </div>
        </>
      ),
    },
    {
      id: 6,
      children: (
        <>
          <h3 class="flex items-center mb-1 text-lg font-montserrat-500">
            Payroll Management System Mobile App
          </h3>
          <p class="block mb-2 text-sm font-montserrat-400 leading-none">
            A mobile application that can manage the payroll of the employees
            using React Native and Laravel as the backend.
          </p>
          <div className="flex gap-2">
            <TbBrandReactNative size={35} />
            <FaLaravel size={35} />
          </div>
        </>
      ),
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
            className="text-white bg-cyan-500 p-3 rounded-md shadow-md hover:scale-105 hover:bg-cyan-200 hover:text-gray-800 duration-200 "
            key={project.id}
          >
            {project.children}
          </div>
        ))}
      </div>
    </div>
  );
}
