"use client";

import { PropsWithChildren } from "react";

export default function Button({
  children,
  color,
}: PropsWithChildren<{ color: string }>) {
  return (
    <button
      type="submit"
      className={`${
        color ? `bg-${color}` : "bg-white"
      } rounded-[7px] m-2 ml-0 p-2 mt-6 transition-[0.5s] hover:scale-105`}
    >
      {children}
    </button>
  );
}
