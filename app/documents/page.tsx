"use client";
import { Post } from "@/interfaces";
// import { dbQuery } from "@/src/lib/db";
import React, { useEffect, useState } from "react";
import AddDoc from "../components/AddDoc";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

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
  console.log(posts);

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
    const res = await fetch("http://localhost:3000/api/docs/" + post.id);
    const data = await res.json();
    console.log(data[0]);
  };

  const documentData = (posts as Post[]).map((post: Post) => (
    <div
      onClick={() => handleSinglePost(post)}
      key={post.id}
      className="bg-slate-500 m-2 p-4 max-w-lg rounded-[15px] min-w-full md:min-w-[70%] md:max-w-[100%]"
    >
      <h1 className="text-[25px] font-bold">{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.createdAt.toString().split("T")[0]}</p>
      <button
        onClick={(e) => handleEdit(post)}
        className="bg-slate-300 m-1 p-2 min-w-[60px] rounded-[7px]"
      >
        Edit
      </button>
      <button
        onClick={(e) => handleDelete(post)}
        className="bg-red-300 m-1 p-2 min-w-[60px] rounded-[7px]"
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col items-center max-w-7xl m-auto min-h-screen text-center p-10">
      {documentData}
    </div>
  );
}
