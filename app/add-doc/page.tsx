"use client";
import React, { useState } from "react";
import AddDocBtn from "@/app/components/Button";
import Button from "@/app/components/Button";

export default function AddDoc() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/docs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    console.log(res);
    setTitle("");
    setDescription("");
  };
  // max-w-7xl m-auto min-h-screen text-center p-10
  return (
    <div className="flex justify-center align-top max-w-7xl min-h-screen m-auto p-3 bg-slate-400 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start p-10 min-w-[100%]"
      >
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="min-w-[100%] min-h-[40px] p-2 text-lg"
        />

        <br />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-w-[100%] min-h-[100px] p-2 text-lg"
        />

        <Button color="">Add Document</Button>
      </form>
    </div>
  );
}
