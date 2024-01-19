"use client";
import { useState } from "react";
import Image from "next/image";
import { FiRefreshCcw } from "react-icons/fi";
import TailwindCSSLogo from "../images/TailwindCSS_Logo.png";
import Jonathan from "../images/me_capstone.png";
import Certificate1 from "../images/certificates/Sweep_Network_on_Cloud.png";
import Certificate2 from "../images/certificates/Sweep_The_Agile_Mindset.png";
import Certificate3 from "../images/certificates/Sweep_Data_Visualization_Part_1.png";
import Certificate4 from "../images/certificates/Sweep_Data_Visualization_Part_2.png";

// export const metadata = {
//   title: "About | Jonathan Niez",
// };

export default function About() {
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
    <div className="container mx-auto">
      <div className="flex flex-row gap-2 justify-center items-center my-5 sm:mx-2 max-sm:mx-2">
        <div className="flex flex-col gap-4 text-white drop-shadow-md">
          <div className="slide-in-top bg-black bg-opacity-60 rounded-lg shadow-lg py-2 px-3">
            <p className="text-2xl font-medium">About Myself</p>
          </div>
          <div className="bg-blue-400 shadow-md rounded-md py-2 px-3">
            <p className="slide-in-right text-3xl sm:texl-xl max-sm:text-xl font-bold ">
              Hello, I am Jonathan A. Niez Jr.
            </p>
            <p className="slide-in-left font-medium text-lg sm:text-md max-sm:text-md ">
              I am a 21 year old Programmer/Developer, I build websites, android
              development and edit photos and videos. I have experience few
              programming languages and web frameworks such as ReactJS, NextJS,
              Javascript, CSS, Java, Kotlin, Python, C++ and C#.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            width={700}
            className="object-contain rounded-lg shadow-md scale-in-center"
            src={Jonathan}
            alt="Jonathan"
          />
          <div className="slide-in-right bg-white hover:bg-gray-300 shadow-lg rounded-lg py-2 px-3 cursor-pointer">
            <FiRefreshCcw size={40} />
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center gap-2 bg-blue-500 py-3 px-2 shadow-lg rounded-lg sm:mx-2 max-sm:mx-2">
          <p className="text-white font-medium text-xl sm:text-lg max-sm:text-lg drop-shadow-md">
            Certificates
          </p>
          <div className="grid grid-cols-2 gap-3 justify-items-center bg-gray-200 rounded-md shadow-md p-2">
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
        <div className="sm:mx-2 max-sm:mx-2 my-5 bg-white flex flex-col  justify-center items-center py-4 px-3 shadow-lg rounded-lg">
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
    </div>
  );
}
