import Image from "next/image";
import Jonathan from "../images/me_capstone.png";

export const metadata = {
  title: "About | Jonathan",
};

export default function About() {
  return (
    <div className=" min-h-screen">
      {" "}
      <div>
        <Image
          width={100}
          className="object-contain"
          src={Jonathan}
          alt="Jonathan"
        />
      </div>
      <hi>About</hi>
    </div>
  );
}
