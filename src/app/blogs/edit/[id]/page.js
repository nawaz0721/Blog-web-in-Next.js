"use client";

import { getSingleBlog, updateBlog } from "@/actions/blogs";
import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";

export default function EditBlog({ params }) {
  const router = useRouter();
  const formRef = useRef(null);
  const unwrappedParams = use(params); // Unwrap `params` here
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    author: "",
    body: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogDetails();
  }, [unwrappedParams]);

  async function getBlogDetails() {
    try {
      const blog = await getSingleBlog(unwrappedParams.id);
      if (blog) {
        setBlogDetails({ ...blog });
      }
    } catch (err) {
      console.error("Failed to fetch blog details:", err);
      setError("Failed to load blog details.");
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedBlog = { ...blogDetails };

    try {
      await updateBlog(unwrappedParams.id, updatedBlog);
      router.push("/blogs");
      formRef.current?.reset();
    } catch (err) {
      console.error("Failed to update blog:", err);
      setError("Failed to update blog.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1  container mx-auto my-10 px-4">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full sm:w-2/3 mx-auto bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Edit Blog</h2>

          <input
            type="text"
            required
            name="title"
            value={blogDetails.title}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, title: e.target.value })
            }
            placeholder="Blog Title"
            className="border-2 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <input
            type="text"
            required
            name="author"
            value={blogDetails.author}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, author: e.target.value })
            }
            placeholder="Blog Author"
            className="border-2 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <textarea
            required
            name="body"
            value={blogDetails.body}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, body: e.target.value })
            }
            placeholder="Blog Description"
            className="border-2 p-3 mb-6 w-full h-40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-lg p-3"
          >
            Update Blog
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
