import { FaCrown } from "react-icons/fa6";

export default function Experiences() {
  return (
    <div
      className="container py-4 flex md:flex-col sm:flex-col max-sm:flex-col justify-center items-center
     gap-3 text-white drop-shadow-md"
    >
      <div className="flex gap-2 justify-center items-center mb-10 scale-in-ver-bottom">
        <FaCrown size={35} />
        <p className="drop-shadow-lg md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-600">
          Experiences
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ol>
          <li className="mb-10">
            <h3 className="flex items-center mb-1 md:text-xl sm:text-lg max-sm:text-lg font-montserrat-500">
              M. Velasquez Bookkeeping and Consultancy Firm
            </h3>
            <time className="block mb-2 md:text-lg sm:text-md max-sm:text-md font-montserrat-500 leading-none">
              June 2021 to December 2023
            </time>
            <ul className="list-disc list-inside font-montserrat-400 md:text-md sm:text-sm max-sm:text-sm">
              <li>Assist with client's daily needs</li>
              <li>Resolve basic computer problems within the office</li>
            </ul>
          </li>

          <li className="mb-10">
            <h3 className="flex items-center mb-1 md:text-xl sm:text-lg max-sm:text-lg font-montserrat-500">
              Work Immersion at Davao Wisdom Academy
            </h3>
            <time className="block mb-2 md:text-lg sm:text-md max-sm:text-md font-montserrat-500 leading-none">
              March 2019 to August 2020
            </time>
            <ul className="list-disc list-inside font-montserrat-400 md:text-md sm:text-sm max-sm:text-sm">
              <li>Assist with new student enrollees</li>
              <li>
                Assist with IT Lab computer software and hardware maintenance.
              </li>
            </ul>
          </li>

          <li className="mb-10">
            <h3 className="flex items-center mb-1 md:text-xl sm:text-lg max-sm:text-lg font-montserrat-500">
              Intern in InfinityHub Digital Marketing
            </h3>
            <time className="block mb-2 md:text-lg sm:text-md max-sm:text-md font-montserrat-500 leading-none">
              February 15, 2024 - May 9, 2024
            </time>
            <ul className="list-disc list-inside font-montserrat-400 md:text-md sm:text-sm max-sm:text-sm">
              <li>
                Assigned for developing a Paryoll Mobile app using React Native
                and Laravel
              </li>
              <li>
                Reformat and fix some company's computer hardware and software
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
