import { FaCrown } from "react-icons/fa6";

export default function Experiences() {
  return (
    <div
      id="experiences"
      className="container bg-blue-800 flex md:flex-col sm:flex-col max-sm:flex-col sm:px-4 max-sm:px-4 justify-center items-center gap-3 rounded-lg shadow-lg py-4 text-white drop-shadow-md "
    >
      <div className="flex gap-2 justify-center items-center">
        <FaCrown size={35} />
        <p className="md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-medium scale-in-ver-bottom">
          Experiences
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ol className="border-s border-white-200">
          <li className="mb-10 ms-6">
            <span className="absolute start-[12px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              M.Velasquez Bookkeeping and Consultancy Firm
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-white">
              June 2021 to December 2023
            </time>
            <ul className="list-disc list-inside">
              <li className="text-md">Assist Client's daily needs</li>
              <li className="text-md">
                Fix basic computer problems within the office
              </li>
            </ul>
          </li>

          <li class="mb-10 ms-6">
            <span className="absolute start-[12px] w-2 h-2 bg-blue-200 rounded-full"></span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
              Davao Wisdom Academy
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white">
              March 2019 to August 2020
            </time>
            <ul className="list-disc list-inside">
              <li className="text-md">Assist with new student enrollees</li>
              <li className="text-md">
                Assist with IT Lab computer software and hardware maintenance.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
