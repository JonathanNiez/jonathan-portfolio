import Image from "next/image";
import FacebookLogo from "../images/Facebook_Logo.png";
import GmailLogo from "../images/Gmail_Logo.png";
import WhatsAppLogo from "../images/WhatsApp_Logo.png";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div
        id="contact"
        className="w-auto bg-blue-500 flex flex-col gap-4 items-center justify-between my-5 py-3 px-4 sm:mx-2 max-sm:mx-2 rounded-lg shadow-lg"
      >
        <p className="font-medium text-lg text-white drop-shadow-md">
          Contact me
        </p>
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/mr.smoothy13"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform drop-shadow-md"
          >
            <Image className="md:w-16 sm:w-10 max-sm:w-10" src={FacebookLogo} />
          </a>
          <a
            href="#"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform drop-shadow-md"
          >
            <Image className="md:w-16 sm:w-10 max-sm:w-10" src={GmailLogo} />
          </a>
          <a
            href="#"
            target="_blank"
            className="font-medium hover:scale-105 transform transition-transform drop-shadow-md"
          >
            <Image className="md:w-16 sm:w-10 max-sm:w-10" src={WhatsAppLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}
