"use client";
import { useEffect } from "react";
import { FaCrown } from "react-icons/fa6";

export default function Experiences() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Experiences";
  }, []);

  const experiences = [
    {
      id: 1,
      title: "M. Velasquez Bookkeeping and Consultancy Firm",
      date: "June 2021 to December 2023",
      description: [
        "Assist with client's daily needs",
        "Resolve basic computer problems within the office",
      ],
    },
    {
      id: 2,
      title: "Work Immersion at Davao Wisdom Academy",
      date: "March 2019 to August 2020",
      description: [
        "Assist with new student enrollees",
        "Assist with IT Lab computer software and hardware maintenance.",
      ],
    },
    {
      id: 3,
      title: "Intern in InfinityHub Digital Marketing",
      date: "February 15, 2024 - May 9, 2024",
      description: [
        "Assigned for developing a Paryoll Mobile app using React Native and Laravel",
        "Reformat and fix some company's computer hardware and software",
      ],
    },
    {
      id: 4,
      title: "College IT Professor in Holy Cross of Davao College",
      date: "August 2024",
      description: [
        "Teaches in major IT subjects and non-computer literate students understand about IT",
      ],
    },
  ];

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
          {experiences.map((experiences) => {
            return (
              <li className="mb-10" key={experiences.id}>
                <h3 className="flex items-center mb-1 md:text-2xl sm:text-lg max-sm:text-lg font-montserrat-500">
                  {experiences.title}
                </h3>
                <time className="block mb-2 md:text-lg sm:text-md max-sm:text-md font-montserrat-500 leading-none">
                  {experiences.date}
                </time>
                <ul className="list-disc list-inside font-montserrat-400 md:text-lg sm:text-sm max-sm:text-sm">
                  {experiences.description.map((desc, index) => {
                    return <li key={index}>{desc}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
