"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "../globals.css";
import "../background.scss";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.scrollY;

      setScrollDirection(currentScrollTop > lastScrollTop ? "down" : "up");
      setScrollPosition(currentScrollTop);
      setLastScrollTop(currentScrollTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    setScrollPosition(0);
    setLastScrollTop(0);

    setNav(false);
  }, []);

  const links = [
    {
      id: 1,
      title: "Tech Stack",
      link: "/techStack",
    },
    {
      id: 2,
      title: "Experiences",
      link: "/experiences",
    },
    {
      id: 3,
      title: "Education",
      link: "/education",
    },
    {
      id: 4,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      title: "Certificates",
      link: "/certificates",
    },
    {
      id: 6,
      title: "Journal",
      link: "/journal",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-auto sticky top-0 md:px-20 max-sm:px-5 sm:px-5
      py-5
      bg-blue-lapis_lazuli text-white transition-all duration-300 shadow-md mb-5 ${
        scrollDirection === "down" && scrollPosition > 100
          ? "transform translate-y-[-80px]"
          : "transform translate-y-0"
      }`}
      style={{ zIndex: 1000 }}
    >
      <Link
        href="/"
        className="font-montserrat-400 md:text-2xl sm:text-lg max-sm:text-lg font-bold cursor-pointer hover:scale-110 duration-200 drop-shadow-md"
      >
        @jonathan.dev
      </Link>
      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className={`nav-links px-4 py-2 cursor-pointer drop-shadow-md font-montserrat-600 rounded-md link-underline
             ${
               pathname === link
                 ? "bg-blue-200 text-gray-700"
                 : "text-white hover:scale-105 hover:bg-blue-400 duration-200"
             }  `}
          >
            <Link
              href={link}
              onClick={() => {
                NProgress.start();
                setTimeout(() => {
                  NProgress.done();
                }, 2000);
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen navBarBg">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-white text-3xl font-medium"
            >
              <Link
                className={`${
                  pathname === link
                    ? "text-gray-700 bg-blue-200 p-3 rounded-md"
                    : "text-white"
                } drop-shadow-md font-montserrat-600`}
                onClick={() => setNav(!nav)}
                href={link}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
