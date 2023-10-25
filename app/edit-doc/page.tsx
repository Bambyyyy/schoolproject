"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Post } from "@/interfaces";

export default function EditDoc() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completeDoc, setCompleteDoc] = useState<Post | undefined>(undefined);

  const router = useRouter();

  const searchParams = useSearchParams();
  const docId = searchParams?.get("id");
  console.log("docId", docId);

  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch("api/docs/" + docId);
      const data = await res.json();
      console.log("Vårt dokument", data[0]);
      setCompleteDoc(data[0]);
    };
    if (docId) getDocument();
  }, [docId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("api/docs/" + docId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      router.push("/documents");
    }
  };

  return (
    <div className="flex items-center flex-col max-w-7xl m-auto min-h-screen text-center p-10 bg-slate-400">
      <h1 className="font-bold text-[30px]">Edit document</h1>
      {completeDoc ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start m-20"
        >
          <label>Title</label>
          <input
            value={title}
            placeholder={completeDoc.title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-[7px] min-w-[400px] min-h-[40px] p-2 text-lg"
          />

          <br />

          <label>Description</label>
          <textarea
            value={description}
            placeholder={completeDoc.description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-[7px] min-w-[400px] min-h-[100px] p-2 text-lg"
          />

          <button
            className=" text-#e5e7eb rounded-[7px] m-2 ml-0 p-2 bg-white min-w-[60px]"
            type="submit"
          >
            Save
          </button>
        </form>
      ) : (
        <div>Laddar...</div>
      )}
    </div>
  );
}
