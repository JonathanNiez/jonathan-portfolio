import "./globals.css";
import "./background.scss";
import { Inter, Montserrat, Roboto } from "next/font/google";
import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact";

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

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Jonathan A. Niez Jr. | Portfolio",
  description:
    "Portfolio of Jonathan A. Niez Jr., showcasing projects, education, and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${montserrat_400.variable}
       ${montserrat_500.variable} ${montserrat_600.variable} ${roboto.variable}`}
    >
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ProgressBar />
        <Navbar />
        <Contact />
        <div className="container mx-auto flex flex-col md:px-24 sm:px-10 max-sm:px-10 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
