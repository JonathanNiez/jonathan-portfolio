"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      setScrollDirection(currentScrollTop > lastScrollTop ? "down" : "up");
      setScrollPosition(currentScrollTop);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    setScrollPosition(0);
    setLastScrollTop(0);

    setNav(false);
  }, [router.pathname]);

  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 sticky top-0 px-4
      bg-blue-300 text-white transition-all duration-300 shadow-md ${
        scrollDirection === "down" && scrollPosition > 100
          ? "transform translate-y-[-80px]"
          : "transform translate-y-0"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl text-black font-signature ml-2">
          <a
            className="link-underline link-underline-black text-gray-800"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className={`nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:font-black hover:bg-blue-400 duration-200 link-underline`}
          >
            <Link
              className={
                router.pathname === link
                  ? "text-blue-500 bg-white"
                  : "text-gray-700"
              }
              href={link}
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
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen default-bg">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-white text-3xl font-medium "
            >
              <Link
                className="drop-shadow"
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
