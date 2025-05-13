"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GrCertificate } from "react-icons/gr";
import Certificate1 from "../images/certificates/Sweep_Network_on_Cloud.png";
import Certificate2 from "../images/certificates/Sweep_The_Agile_Mindset.png";
import Certificate3 from "../images/certificates/Sweep_Data_Visualization_Part_1.png";
import Certificate4 from "../images/certificates/Sweep_Data_Visualization_Part_2.png";
import ResumeWritingCertificate from "../images/certificates/resume_writing_certificate.jpg";
import CapstoneSpeakerCertificate from "../images/certificates/capstone_speaker_certificate.jpg";
import CertificateOfCompletion from "../images/certificates/certificate_of_completion.png";
import COA from "../images/certificates/coa.png";
import Udemy1 from "../images/certificates/udemy_1.jpg";
import Udemy2 from "../images/certificates/udemy_2.jpg";
import Udemy3 from "../images/certificates/udemy_3.jpg";
import UdemyDart from "../images/certificates/udemy-dart.jpg";
import UdemyCyberSec1 from "../images/certificates/udemy-cybersec1.jpg";
import UdemyCyberSec2 from "../images/certificates/udemy-cybersec2.jpg";

export default function Certificates() {
  const [zoomStates, setZoomStates] = useState({});

  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Certificates";
  }, []);

  const zoomImage = (id) => {
    setZoomStates((prevZoomStates) => {
      if (prevZoomStates[id]) {
        return {};
      }

      return { [id]: true };
    });
  };

  const smartSweepCertificates = [
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

  const hcdcCertificates = [
    { id: 5, src: ResumeWritingCertificate },
    { id: 6, src: CapstoneSpeakerCertificate },
  ];

  const internshipCertificates = [
    { id: 7, src: CertificateOfCompletion },
    { id: 8, src: COA },
  ];

  const udemyCertificates = [
    { id: 9, src: Udemy1 },
    { id: 10, src: Udemy2 },
    { id: 11, src: Udemy3 },
    { id: 12, src: UdemyDart },
    { id: 13, src: UdemyCyberSec1 },
    { id: 14, src: UdemyCyberSec2 },
  ];
  return (
    <div className="container mx-auto text-white flex flex-col justify-center items-center gap-3 py-4 sm:mx-2 max-sm:mx-2">
      <div className="flex gap-2 justify-center items-center mb-10 scale-in-ver-bottom">
        <GrCertificate size={35} />
        <p className="drop-shadow-lg md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-600">
          Certificates
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div>
          <p className="text-center text-white text-lg font-montserrat-500 drop-shadow-lg">
            Smart SWEEP
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 justify-items-center">
            {smartSweepCertificates.map(({ id, src }) => (
              <Image
                key={id}
                width={0}
                height={0}
                onClick={() => zoomImage(id)}
                className={`${
                  zoomStates[id]
                    ? "md:w-2/4 sm:w-3/4 max-sm:w-3/4 cursor-zoom-out outline outline-black absolute z-50"
                    : "w-60 cursor-zoom-in"
                } outline-black shadow-md rounded-md m-2 hover:scale-105 transform transition-transform`}
                src={src}
                alt={`Certificate ${id}`}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-center text-white text-lg font-montserrat-500 drop-shadow-lg">
            Holy Cross of Davao College
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 justify-items-center">
            {hcdcCertificates.map(({ id, src }) => (
              <Image
                key={id}
                width={0}
                height={0}
                onClick={() => zoomImage(id)}
                className={`${
                  zoomStates[id]
                    ? "md:w-2/4 sm:w-3/4 max-sm:w-3/4 cursor-zoom-out outline outline-black absolute z-50"
                    : "w-60 cursor-zoom-in"
                } outline-black shadow-md rounded-md m-2 hover:scale-105 transform transition-transform`}
                src={src}
                alt={`Certificate ${id}`}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-center text-white text-lg font-montserrat-500 drop-shadow-lg">
            Internship
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 justify-items-center">
            {internshipCertificates.map(({ id, src }) => (
              <Image
                key={id}
                width={0}
                height={0}
                onClick={() => zoomImage(id)}
                className={`${
                  zoomStates[id]
                    ? "md:w-2/4 sm:w-3/4 max-sm:w-3/4 cursor-zoom-out outline outline-black absolute z-50"
                    : "w-60 cursor-zoom-in"
                } outline-black shadow-md rounded-md m-2 hover:scale-105 transform transition-transform`}
                src={src}
                alt={`Certificate ${id}`}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-center text-white text-lg font-montserrat-500 drop-shadow-lg">
            Udemy
          </p>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 justify-items-center">
            {udemyCertificates.map(({ id, src }) => (
              <Image
                key={id}
                width={0}
                height={0}
                onClick={() => zoomImage(id)}
                className={`${
                  zoomStates[id]
                    ? "md:w-2/4 sm:w-3/4 max-sm:w-3/4 cursor-zoom-out outline outline-black absolute z-50"
                    : "w-60 cursor-zoom-in"
                } outline-black shadow-md rounded-md m-2 hover:scale-105 transform transition-transform`}
                src={src}
                alt={`Certificate ${id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
