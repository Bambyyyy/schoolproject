"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SinglePage() {
  const [singleDoc, setSingleDoc] = useState<any>(null);
  const router = useRouter();

  const urlSearchParams = new URLSearchParams(window.location.search);
  const db = urlSearchParams.get("db");

  useEffect(() => {
    const getDoc = async (id: string | string[] | null) => {
      if (id) {
        const res = await fetch("http://localhost:3000/api/docs/" + id);
        const data = await res.json();
        setSingleDoc(data[0]);
      }
    };
    getDoc(db);
  }, [db]);

  const allDocuments = () => {
    router.push("/documents/");
  };

  return (
    <div className="flex flex-col items-center align-top max-w-[2000px] min-h-screen m-auto p-10 bg-slate-400">
      {singleDoc ? (
        <div className="flex flex-col items-center bg-slate-500 m-2 p-4 max-w-lg rounded-[15px] min-w-full md:min-w-[30%] md:max-w-[60%] transition-[0.5s] hover:scale-105">
          <h1 className="text-[25px] font-bold">{singleDoc.title}</h1>
          <p>{singleDoc.description}</p>
          <p>{singleDoc.createdAt.split("T")[0]}</p>
          <button
            onClick={allDocuments}
            className="bg-slate-300 m-1 p-2 min-w-[60px] rounded-[7px] transition-[0.5s] hover:scale-105"
          >
            Back
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
