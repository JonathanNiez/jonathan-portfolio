import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import HCDC from "../images/school/hcdc.png";

export default function Education() {
  return (
    <div
      className="container flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center 
    items-center gap-3 py-4 text-white drop-shadow-md "
    >
      <div className="flex gap-2 justify-center items-center mb-10 scale-in-ver-bottom">
        <FaGraduationCap size={35} />
        <p className="drop-shadow-lg md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-600">
          Education
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ol className="relative border-s border-white-200">
          <li className="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 className="flex items-center mb-1 text-2xl font-montserrat-500 text-white">
              Holy Cross of Davao College
            </h3>
            <time className="block mb-2 text-lg font-montserrat-400 leading-none text-white">
              2019 - 2024
            </time>
            <ul className="list-disc list-inside mb-1">
              <li className="text-md font-montserrat-400">
                Auditor (S.Y. 2022 – 2023)
              </li>
            </ul>
            <Image
              className="rounded-md shadow-md w-3/5"
              src={HCDC}
              alt="Holy Cross of Davao College"
            />
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 className="flex items-center mb-1 text-2xl font-montserrat-500 text-white">
              Davao Wisdom Academy
            </h3>
            <time className="block mb-2 text-lg font-montserrat-400 leading-none text-white">
              (S.Y. 2018 – 2020)
            </time>
            <ul className="list-disc list-inside mb-1">
              <li className="text-lg montserrat-400">
                Information and Communications Technology (ICT)
              </li>
            </ul>
            <Image
              className="rounded-md shadow-md w-3/5"
              src={require("../images/school/dwa.png")}
              alt="Holy Cross of Davao College"
            />
          </li>
        </ol>
      </div>
    </div>
  );
}
