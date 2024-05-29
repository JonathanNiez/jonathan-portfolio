import { useState } from "react";
import Image from "next/image";
import Certificate1 from "../images/certificates/Sweep_Network_on_Cloud.png";
import Certificate2 from "../images/certificates/Sweep_The_Agile_Mindset.png";
import Certificate3 from "../images/certificates/Sweep_Data_Visualization_Part_1.png";
import Certificate4 from "../images/certificates/Sweep_Data_Visualization_Part_2.png";

export default function Certificates() {
  const [zoomStates, setZoomStates] = useState({});

  const zoomImage = (id) => {
    setZoomStates((prevZoomStates) => ({
      ...prevZoomStates,
      [id]: !prevZoomStates[id],
    }));
  };

  const certificates = [
    {
      id: 1,
      src: Certificate1,
    },
    {
      id: 2,
      src: Certificate2,
    },
    {
      id: 3,
      src: Certificate3,
    },
    {
      id: 4,
      src: Certificate4,
    },
  ];
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center items-center gap-2 bg-blue-300 py-3 px-2 shadow-lg rounded-lg sm:mx-2 max-sm:mx-2">
        <p className="text-white font-medium md:text-xl sm:text-lg max-sm:text-lg drop-shadow-md">
          Certificates
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 justify-items-center">
          {certificates.map(({ id, src }) => (
            <Image
              key={id}
              width={0}
              height={0}
              onClick={() => zoomImage(id)}
              className={`${
                zoomStates[id]
                  ? "w-3/5 cursor-zoom-out outline outline-black absolute z-50"
                  : "w-60 cursor-zoom-in"
              } outline-black shadow-md rounded-md m-2 hover:scale-105 transform transition-transform`}
              src={src}
              alt={`Certificate ${id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
