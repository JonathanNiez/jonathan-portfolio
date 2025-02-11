"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Education";
  }, []);

  return (
    <div
      className="container flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center 
    items-center gap-3 py-4 text-white drop-shadow-md"
    >
      <div className="flex gap-2 justify-center items-center mb-10 scale-in-ver-bottom">
        <FaGraduationCap size={35} />
        <p className="drop-shadow-lg md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-600">
          Education
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col md:justify-start md:items-start max-sm:justify-center sm:justify-center max-sm:items-center sm:items-center">
          <h3 className="mb-1 md:text-2xl max-sm:text-xl sm:text-xl font-montserrat-500 text-white">
            Holy Cross of Davao College (2020 - 2024)
          </h3>
          <ul className="list-disc list-inside mb-1 md:text-lg max-sm:text-sm sm:text-sm font-montserrat-400">
            <li>Bachelor of Science in Information Technology (BSIT)</li>
            <li>Auditor (S.Y. 2022 – 2023)</li>
          </ul>
          <Image
            className="rounded-md shadow-md w-[100vh]"
            src={require("../images/school/hcdc.png")}
            alt="Holy Cross of Davao College"
          />
        </div>
        <div className="flex flex-col md:justify-start md:items-start max-sm:justify-center sm:justify-center max-sm:items-center sm:items-center">
          <h3 className="mb-1 md:text-2xl max-sm:text-xl sm:text-xl font-montserrat-500 text-white">
            Davao Wisdom Academy (S.Y. 2018 – 2020)
          </h3>
          <ul className="list-disc list-inside mb-1 md:text-lg max-sm:text-sm sm:text-sm font-montserrat-400">
            <li>Information and Communications Technology (ICT)</li>
          </ul>
          <Image
            className="rounded-md shadow-md w-[100vh]"
            src={require("../images/school/dwa.png")}
            alt="Davao Wisdom Academy"
          />
        </div>
      </div>
    </div>
  );
}
