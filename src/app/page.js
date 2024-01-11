import Image from "next/image";
import TPoseJonathan from "./images/T.png";
import { GiSkills } from "react-icons/gi";

export const metadata = {
  title: "Home | Jonathan Niez",
};

export default function Home() {
  const codingSkills = [
    {
      id: 1,
      programmingLanguage: "Java",
      skillLevel: "Intermediate",
    },
    {
      id: 2,
      programmingLanguage: "Kotlin",
      skillLevel: "Beginner",
    },
    {
      id: 3,
      programmingLanguage: "Python",
      skillLevel: "Intermediate",
    },
    {
      id: 4,
      programmingLanguage: "Javascript",
      skillLevel: "Intermediate",
    },
    {
      id: 5,
      programmingLanguage: "C#",
      skillLevel: "Beginner",
    },
    {
      id: 6,
      programmingLanguage: "C++",
      skillLevel: "Intermediate",
    },
    {
      id: 7,
      programmingLanguage: "CSS",
      skillLevel: "Intermediate",
    },
  ];

  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <div className="w-auto bg-blue-400 shadow-md rounded-md ">
        <div className="flex flex-row justify-center items-center m-1">
          <h2 className="text-gray-800 text-4xl text-center font-medium">
            Skills
          </h2>
          <GiSkills />
        </div>
        <div className="grid grid-cols-2 m-2">
          <Image
            className="rounded-xl shadow-lg"
            width={300}
            src={TPoseJonathan}
          />
          <div className="flex flex-row justify-center items-center">
            <div>
              <p className="text-gray-800 font-medium">Coding</p>
              <ul>
                {codingSkills.map(({ id, programmingLanguage, skillLevel }) => (
                  <li key={id}>{`${programmingLanguage} ${skillLevel}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
