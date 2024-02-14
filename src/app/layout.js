import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Niez",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto flex flex-col md:px-24 sm:px-10 max-sm:px-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
