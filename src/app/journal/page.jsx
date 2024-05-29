import Image from "next/image";

export default function Journal() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-montserrat-600 text-white mb-5">Journal</h1>
      <div>
        <p className="font-montserrat-500 text-white text-lg text-center">
          The Team
        </p>
        <Image
          className="rounded-lg drop-shadow-lg"
          src={require("../images/journal/the_bois.jpg")}
          alt="the_bois"
        />
      </div>
      <div>
        <p className="font-montserrat-500 text-white text-lg text-center">
          The Team and the Supervisor
        </p>
        <Image
          className="rounded-lg drop-shadow-lg"
          src={require("../images/journal/the_bois_and_the_supervisor.jpg")}
          alt="the_bois_and_the_supervisor"
        />
      </div>
      <div>
        <p className="font-montserrat-500 text-white text-xl text-center">
          The Project
        </p>
      </div>
    </div>
  );
}
