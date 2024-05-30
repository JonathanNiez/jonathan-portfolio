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

export default function Projects() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Projects";
  }, []);

  return (
    <div className="container flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 py-4 text-white drop-shadow-md ">
      <div className="flex gap-2 justify-center items-center mb-5">
        <FaPuzzlePiece size={35} />
        <p className="drop-shadow-md md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-500 scale-in-ver-bottom">
          Projects
        </p>
      </div>

      <div className="w-full flex flex-col justify-start items-start">
        <ol class="relative border-s border-white-200 ">
          <li class="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              Random Password Generator using Python
            </h3>
            <p class="mb-2 text-sm font-normal leading-none text-white">
              A very simple and easy random password generator using Python that
              is good for beginners.
            </p>
            <FaPython size={35} />
          </li>
          <li class="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              Online Shopping App
            </h3>
            <p class=" mb-2 text-sm font-normal leading-none text-white">
              A simple E-commerce app with easy to use UI and with chat feature.
            </p>
            <div className="flex gap-2">
              <FaJava size={35} />
              <SiAndroidstudio size={35} />
              <FaAndroid size={35} />
            </div>
          </li>
          <li class="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              CareCabs
            </h3>
            <p class="text-wrap mb-2 text-sm font-normal leading-none text-white">
              A Capstone project that lessens the burden of Senior Citizens and
              PWDs for their daily transporation problems. This app features a
              user-friendly UI with accessibility settings, ID scanning and Map
              using Mapbox.
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
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              Dormitory Management App using Blazor
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
  );
}
