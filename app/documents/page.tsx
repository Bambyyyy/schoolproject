"use client";
import { Post } from "@/interfaces";
// import { dbQuery } from "@/src/lib/db";
import React, { useEffect, useState } from "react";
import AddDoc from "../components/AddDoc";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Documents() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  // const query = "SELECT * FROM schoolproject";
  // const posts = dbQuery({ query, values: [] });
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api/docs");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
    };
    getPosts();
  }, []);

  const handleEdit = (post: Post) => {
    router.push("/edit-doc/?id=" + post.id);
  };

  const handleDelete = async (post: Post) => {
    const res = await fetch("api/docs/" + post.id, {
      method: "DELETE",
    });
    if (res.ok) {
      setPosts(posts.filter((p: Post) => p.id !== post.id));
    }
  };

  const handleSinglePost = async (post: Post) => {
    window.location.href = `/single-doc?db=${post.id}`;
  };

  const documentData = (posts as Post[]).map((post: Post) => (
    <div
      key={post.id}
      className="bg-slate-500 m-2 p-4 max-w-lg rounded-[15px] min-w-full md:min-w-[30%] md:max-w-[30%] transition-[0.5s] hover:scale-105"
    >
      <h1 className="text-[25px] font-bold">{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.createdAt.toString().split("T")[0]}</p>
      <button
        onClick={() => handleSinglePost(post)}
        className="bg-slate-300 m-1 p-2 min-w-[60px] rounded-[7px] transition-[0.5s] hover:scale-105"
      >
        <DescriptionIcon />
      </button>
      <button
        onClick={(e) => handleEdit(post)}
        className="bg-slate-300 m-1 p-2 min-w-[60px] rounded-[7px] transition-[0.5s] hover:scale-105"
      >
        <EditIcon />
      </button>
      <button
        onClick={(e) => handleDelete(post)}
        className="bg-red-300 m-1 p-2 min-w-[60px] rounded-[7px] transition-[0.5s] hover:scale-105"
      >
        <DeleteForeverIcon />
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col items-center max-w-[2000px] m-auto min-h-[100vh] text-center p-10 bg-slate-400">
      <h1 className="font-bold text-[30px] mb-10">All documents</h1>
      {documentData}
    </div>
  );
}
