import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-blue-300 shadow-md w-full h-40 flex flex-row justify-center p-2">
      <p className="text-black">
        Copyright 2024 |{" "}
        <Link className="text-gray-700 font-medium" href="/contact">
          Contact
        </Link>
      </p>
    </div>
  );
}
