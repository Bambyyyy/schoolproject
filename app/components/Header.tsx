import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 h-24 flex flex-row justify-around items-center bg-slate-600 text-white max-w-[2000px] m-auto">
      <nav className="relative">
        <Link href="/">
          <h1 className="text-standard">School Project</h1>
        </Link>
      </nav>

      <div className="flex xs:gap-2 sm:gap-5 lg:gap-7">
        <nav className="text-standard relative group">
          <Link href="/documents">Documents</Link>
          <span className="absolute block w-full h-0.5 bg-white  transform scale-x-0 origin-left transition-transform ease-in-out duration-300 group-hover:scale-x-100"></span>
        </nav>
        <nav className="text-standard relative group">
          <Link href="/add-doc">Create Document</Link>
          <span className="absolute block w-full h-0.5 bg-white  transform scale-x-0 origin-left transition-transform ease-in-out duration-300 group-hover:scale-x-100"></span>
        </nav>
      </div>
    </header>
  );
}
