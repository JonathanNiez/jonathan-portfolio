"use client";
import { useEffect } from "react";
import Projects from "../components/Projects";

export default function App() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Projects";
  }, []);

  return <Projects />;
}
