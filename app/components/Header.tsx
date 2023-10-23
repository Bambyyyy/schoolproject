import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 h-24 flex flex-row justify-around items-center bg-slate-600 text-white max-w-7xl m-auto">
      <Link href="/">
        <h1 className="text-standard">School Project</h1>
      </Link>

      <div className="flex xs:gap-2 sm:gap-5 lg:gap-7">
        <nav className="text-standard">
          <Link href="/documents">Documents</Link>
        </nav>
        <nav className="text-standard">
          <Link href="/add-doc">Create Document</Link>
        </nav>
      </div>
    </header>
  );
}
