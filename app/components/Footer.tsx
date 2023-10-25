import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-5 bottom-0 max-w-7xl m-auto h-10 bg-slate-600 text-white">
      <nav className="text-[16px] relative group">
        <Link href="/documents" className="text-white">
          Documents
        </Link>
        <span className="absolute block w-full h-0.5 bg-white  transform scale-x-0 origin-left transition-transform ease-in-out duration-300 group-hover:scale-x-100"></span>
      </nav>
      <nav className="text-[16px] relative group">
        <Link href="/add-doc" className="text-white">
          Create Document
        </Link>
        <span className="absolute block w-full h-0.5 bg-white  transform scale-x-0 origin-left transition-transform ease-in-out duration-300 group-hover:scale-x-100"></span>
      </nav>
    </footer>
  );
}
