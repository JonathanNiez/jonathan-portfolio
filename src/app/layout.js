import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan A. Niez Jr.",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link ref="icon" href="/images/favicon.png" />
      </Head>
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
