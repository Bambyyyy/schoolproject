import React, { useState } from "react";
import AddDocBtn from "./Button";

export default function AddDoc() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center p-3 m-2 bg-slate-400 ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <br />

        <label>Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <AddDocBtn />
      </form>
    </div>
  );
}
