"use client";
import React, { useState } from "react";
import AddDocBtn from "@/app/components/Button";
import Button from "@/app/components/Button";
import EditIcon from "@mui/icons-material/Edit";

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
    <div className="flex flex-col items-center align-top max-w-[2000px] min-h-screen m-auto p-10 bg-slate-400 ">
      <h1 className="font-bold text-[30px]">Add Documents</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start m-20 xs:w-[90%] md:w-[60%] lg:w-[40%]"
      >
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-[7px] w-[100%] min-w-[40%] min-h-[40px] after:text-lg p-2 text-lg"
        />

        <br />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-[7px] w-[100%] min-w-[40%] text-lg min-h-[100px] p-2 text-lg"
        />

        <Button color="">Add Document</Button>
      </form>
    </div>
  );
}
