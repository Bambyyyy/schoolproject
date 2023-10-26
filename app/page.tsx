import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col align-middle  bg-slate-500 max-w-[2000px] m-auto min-h-screen text-center">
      <h1 className="text-white xs:text-[22px] sm:text-[30px] lg:text-[30px] mt-[200px] ml-auto mr-auto">
        Welcome to Jesper Floods Document app!
      </h1>
    </div>
  );
}
