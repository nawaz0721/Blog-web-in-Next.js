"use client";

import { addBlog } from "@/actions/blogs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function BlogForm() {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const obj = {
      title: formData.get("title"),
      author: formData.get("author"),
      body: formData.get("body"),
    };

    console.log("formData", obj);
    await addBlog(obj);
    router.push("/blogs");
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-2/3 mx-auto flex flex-col gap-2"
    >
      <input
        type="text"
        required
        name="title"
        placeholder="Blog Title"
        className="border-2 p-2 flex flex-grow"
      />
      <input
        type="text"
        required
        name="author"
        placeholder="Blog Author"
        className="border-2 p-2 flex flex-grow"
      />
      <textarea
        required
        name="body"
        placeholder="Blog Description"
        className="border-2 p-2 flex flex-grow"
      />
      <Button asChild>
        <input type="submit" value="Add Blog" className="rounded p-2 px-4" />
      </Button>
    </form>
  );
}
