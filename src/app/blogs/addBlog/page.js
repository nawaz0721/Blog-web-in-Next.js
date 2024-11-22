import BlogForm from "@/app/component/BlogForm";
import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";
import React from "react";

function addBlog() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-5">
        <h1 className="text-3xl mt-5 font-bold">Add Blogs</h1>
        <BlogForm />
      </div>
      <Footer />
    </>
  );
}

export default addBlog;
