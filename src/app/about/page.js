import Image from "next/image";
import Jonathan from "../images/me_capstone.png";

export const metadata = {
  title: "About | Jonathan",
};

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {" "}
      <div className="w-full p-3">
        <div className="grid grid-cols-2 gap-2 justify-center items-center">
          <div className="bg-blue-400 shadow-md rounded-md py-2 px-3">
            <p className="text-3xl font-medium">
              Hola! I am Jonathan A. Niez Jr.
            </p>
            <p>
              I am a 21 year old Programmer/Developer, I build websites, android
              development and edit photos and videos. I have experience few
              programming languages and web frameworks such as ReactJS, NextJS,
              Javascript, CSS, Java, Kotlin, Python, C++ and C#.
            </p>
          </div>

          <div>
            <Image
              width={100}
              className="object-contain rounded-lg shadow-md"
              src={Jonathan}
              alt="Jonathan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
