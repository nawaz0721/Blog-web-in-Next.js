import React from "react";
import DeleteBlogButton from "@/app/component/DeleteBlogButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";

async function BlogDetails({ params }) {
  const { id } = params;

  // Fetch blog details
  let res = await fetch(`http://localhost:3000/api/blogs/${id}`);
  res = await res.json();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto my-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-3xl text-blue-800">Blog Details</h1>
          <div className="flex gap-3">
            <Link href={`/blogs/edit/${id}`}>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                Edit
              </Button>
            </Link>
            <DeleteBlogButton id={id} />
          </div>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{res.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{res.body}</p>
          <p className="text-sm text-black">
            <span className="font-semibold">Author:</span> <span className="underline">{res.author}</span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BlogDetails;
