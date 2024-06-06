"use client";
import { useEffect } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TbBrandReactNative } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

export default function Journal() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Journal";
  }, []);

  return (
    <div className="container py-4 mx-auto flex flex-col items-center justify-center text-white">
      <div className="flex gap-2 justify-center items-center mb-10 scale-in-ver-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-10 me-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
          />
        </svg>
        <p className="drop-shadow-lg md:text-4xl sm:text-2xl max-sm:text-2xl text-center font-montserrat-600">
          Journal
        </p>
      </div>
      <p className="font-montserrat-500 text-white md:text-2xl max-sm:text-xl sm:text-xl text-center mb-2">
        The Team
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex md:flex-row sm:flex-col max-sm:flex-col gap-2 justify-center items-center">
          <Image
            className="rounded-md drop-shadow-md md:w-[70%] sm:w-full max-sm:w-full"
            src={require("../images/journal/the_bois.jpg")}
            alt="the_bois"
          />
          <div className="md:w-[30%] sm:w-full max-sm:w-full flex flex-col gap-2 font-montserrat text-white bg-black bg-opacity-40 rounded-md shadow-md p-2 md:text-lg max-sm:text-sm sm:text-sm text-center">
            <p>
              My internship at InfinityHub started with a comprehensive
              orientation session. I was introduced to the team, the company's
              culture, and the specifics of my role as a Programmer/Developer.
              My main task was to develop a payroll mobile app using React
              Native and Laravel. I felt a mix of excitement and nervousness as
              I prepared to dive into this significant project.
            </p>
            <p>
              Reflecting on my overall experience at InfinityHub, I feel very
              happy with what I accomplished and learned. The skills I gained in
              React Native and Laravel, coupled with the experience of working
              in a team, have been invaluable. This internship has given me
              confidence in my abilities and has provided me with a solid
              foundation to build my future career upon.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse gap-2 justify-center items-center">
          <div
            className="md:w-[30%] sm:w-full max-sm:w-full flex flex-col gap-2 font-montserrat text-white bg-black bg-opacity-40
           rounded-md shadow-md p-2 md:text-lg max-sm:text-sm sm:text-sm text-center"
          >
            <p>
              The knowledge and experience I acquired during this internship
              will serve as a guide when I apply for jobs in the future.
              Understanding how to manage time effectively, work
              collaboratively, and develop applications in a professional
              setting are lessons that I will carry forward into my career.
            </p>
            <p>
              This internship at InfinityHub has been a pivotal experience,
              shaping my professional skills and reinforcing my passion for
              software development. I am grateful for the opportunity and
              excited about the future.
            </p>
          </div>
          <div className="md:w-[70%] sm:w-full max-sm:w-full m-auto">
            <Carousel
              autoPlay={true}
              showArrows={true}
              swipeable={true}
              showStatus={false}
              interval={3000}
              infiniteLoop={true}
            >
              <div>
                <Image
                  className="rounded-md shadow-md w-full"
                  src={require("../images/journal/presenting_1.jpg")}
                  alt="the_bois"
                />
              </div>
              <div>
                <Image
                  className="rounded-md shadow-md w-full"
                  src={require("../images/journal/presenting_2.jpg")}
                  alt="the_bois"
                />
              </div>
              <div>
                <Image
                  className="rounded-md shadow-md w-full"
                  src={require("../images/journal/presenting_3.jpg")}
                  alt="the_bois"
                />
              </div>
              <div>
                <Image
                  className="rounded-md shadow-md w-full"
                  src={require("../images/journal/presenting_4.jpg")}
                  alt="the_bois"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="md:w-2/3 sm:w-full max-sm:w-full m-auto">
          <Carousel
            autoPlay={true}
            showArrows={true}
            swipeable={true}
            showStatus={false}
            interval={3000}
            infiniteLoop={true}
          >
            <div>
              <Image
                className="rounded-md shadow-md w-full"
                src={require("../images/journal/the_bois2.jpg")}
                alt="The Bois 2"
              />
            </div>
            <div>
              <Image
                className="rounded-md shadow-md w-full"
                src={require("../images/journal/the_bois3.jpg")}
                alt="The Bois 3"
              />
            </div>
            <div>
              <Image
                className="rounded-md shadow-md w-full"
                src={require("../images/journal/the_bois4.jpg")}
                alt="The Bois 4"
              />
            </div>
            <div>
              <Image
                className="rounded-md shadow-md w-full"
                src={require("../images/journal/the_bois5.jpg")}
                alt="The Bois 5"
              />
            </div>
            <div>
              <Image
                className="rounded-md shadow-md w-full"
                src={require("../images/journal/the_bois6.jpg")}
                alt="The Bois 6"
              />
            </div>
          </Carousel>
        </div>
        <div>
          <p className="font-montserrat-500 text-white md:text-2xl max-sm:text-xl sm:text-xl text-center mb-2">
            The Team and the Supervisor
          </p>
          <Image
            className="md:w-2/3 sm:w-full max-sm:w-full rounded-lg drop-shadow-lg m-auto"
            src={require("../images/journal/the_bois_and_the_supervisor.jpg")}
            alt="the_bois_and_the_supervisor"
          />
        </div>
        <div>
          <p className="font-montserrat-500 text-white md:text-2xl max-sm:text-xl sm:text-xl text-center mb-5">
            The Project
          </p>
          <div
            className="flex md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse
            justify-center items-center gap-3"
          >
            <div className="md:w-[50%] sm:w-full max-sm:w-full flex flex-col justify-center items-center gap-2">
              <p
                className="font-montserrat-500 text-white md:text-lg 
            max-sm:text-md sm:text-md text-center"
              >
                Employee Payroll Management System Mobile App
              </p>
              <div className="flex gap-2 text-white">
                <TbBrandReactNative size={35} />
                <FaLaravel size={35} />
                <SiMysql size={35} />
              </div>
              <p className="font-montserrat text-balance text-white md:text-lg max-sm:text-sm sm:text-sm text-center">
                The project is a mobile application that can manage the payroll
                of the employees of a company. It is a cross-platform mobile
                application that is developed using React Native and Laravel as
                the backend.
              </p>
            </div>
            <Image
              className="md:w-60 max-sm:w-28 sm:w-28 rounded-lg drop-shadow-lg"
              src={require("../images/journal_project/ManPro_icon.png")}
              alt="company_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
