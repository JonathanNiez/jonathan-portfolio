"use client";
import { useEffect } from "react";
import Education from "../components/Education";

export default function App() {
  useEffect(() => {
    document.title = "Jonathan A. Niez Jr. | Education";
  }, []);

  return <Education />;
}
