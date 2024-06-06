"use client";
import { useEffect } from "react";
import { FaCrown } from "react-icons/fa6";
import Experiences from "../components/Experiences";

export default function App() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Experiences";
  }, []);

  return <Experiences />;
}
