import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className="container flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 py-4 text-white drop-shadow-md ">
      <div className="flex gap-2 justify-center items-center">
        <FaGraduationCap size={35} />
        <p className="drop-shadow-md md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-500 scale-in-ver-bottom">
          Education
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ol class="relative border-s border-white-200">
          <li class="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              Holy Cross of Davao College
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white">
              2019 - Present
            </time>
            <ul className="list-disc list-inside">
              <li className="text-md">Auditor (S.Y. 2022 – 2023)</li>
            </ul>
          </li>
          <li class="mb-10 ms-6">
            <span className="absolute start-[-5px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              Davao Wisdom Academy
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white">
              (S.Y. 2018 – 2020)
            </time>
            <ul className="list-disc list-inside">
              <li className="text-md">
                Information and Communications Technology (ICT)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
