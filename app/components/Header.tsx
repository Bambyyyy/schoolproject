import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 h-24 flex flex-row justify-around items-center bg-slate-600 text-white max-w-7xl m-auto">
      <h1 className="text-4xl">School Project</h1>
      <nav className="flex gap-3">
        <Link href="/">Startpage</Link>
        <Link href="/documents">Documents</Link>
      </nav>
    </header>
  );
}
