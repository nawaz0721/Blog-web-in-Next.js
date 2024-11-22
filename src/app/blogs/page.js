import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";

async function Blogs() {
  let res = await fetch(`http://localhost:3000/api/blogs`);
  res = await res.json();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto my-5 flex flex-col py-10">
        <div className="flex flex-wrap justify-between mb-10">
          <h1 className="text-3xl font-bold text-blue-600">All Blogs</h1>
          <Button asChild>
            <Link
              href="/blogs/addBlog"
              className="rounded px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
              Add Blog
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {res.data?.map((data) => (
            <Link href={`/blogs/${data._id}`} key={data._id}>
              <div className="bg-blue-50 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-100 duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-blue-900">
                  {data.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {data.body || "No description available."}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  <span className="font-semibold">Author:</span> {data.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
