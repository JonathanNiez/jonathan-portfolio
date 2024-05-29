import "./globals.css";
import Head from "next/head";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

export const metadata = {
  title: "Jonathan A. Niez Jr.",
  description: "Portfolio",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const montserrat_400 = Montserrat({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-400",
});

const montserrat_500 = Montserrat({
  weight: ["500"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-500",
});

const montserrat_600 = Montserrat({
  weight: ["600"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-600",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${montserrat_400.variable} ${montserrat_500.variable} ${montserrat_600.variable}`}
    >
      <Head>
        <link ref="icon" href="/images/favicon.png" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto flex flex-col md:px-24 sm:px-10 max-sm:px-10 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
