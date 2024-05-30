"use client";
import { useEffect } from "react";
import Image from "next/image";
import { TbBrandReactNative } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

export default function Journal() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Journal";
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-5">
      <h1 className="md:text-4xl max-sm:text-2xl sm:text-2xl font-montserrat-600 text-white mb-5">
        Journal
      </h1>
      <div>
        <p className="font-montserrat-500 text-white md:text-2xl max-sm:text-xl sm:text-xl text-center">
          The Team
        </p>
        <Image
          className="rounded-lg drop-shadow-lg"
          src={require("../images/journal/the_bois.jpg")}
          alt="the_bois"
        />
      </div>
      <div>
        <p className="font-montserrat-500 text-white md:text-2xl max-sm:text-xl sm:text-xl text-center">
          The Team and the Supervisor
        </p>
        <Image
          className="rounded-lg drop-shadow-lg"
          src={require("../images/journal/the_bois_and_the_supervisor.jpg")}
          alt="the_bois_and_the_supervisor"
        />
      </div>
      <div>
        <p className="font-montserrat-500 text-white md:text-2xl max-sm:text-xl sm:text-xl text-center mb-5">
          The Project
        </p>
        <div
          className="flex md:flex-row sm:flex-col max-sm:flex-col 
        justify-center items-center gap-3"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <p
              className="font-montserrat-500 text-white md:text-xl 
            max-sm:text-lg sm:text-lg text-center"
            >
              Employee Payroll Management System Mobile App
            </p>
            <div className="flex gap-2 text-white">
              <TbBrandReactNative size={35} />
              <FaLaravel size={35} />
              <SiMysql size={35} />
            </div>
            <p className="font-montserrat-400 text-balance text-white md:text-lg max-sm:text-md sm:text-md text-center">
              The project is a mobile application that can manage the payroll of
              the employees of a company. It is a cross-platform mobile
              application that is developed using React Native and Laravel as
              the backend.
            </p>
          </div>
          <Image
            className="md:w-3/4 max-sm:w-2/4 sm:w-2/4 rounded-lg drop-shadow-lg"
            src={require("../images/journal_project/ManPro_icon.png")}
            alt="company_icon"
          />
        </div>
      </div>
    </div>
  );
}
