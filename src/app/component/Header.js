import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">MyBlog</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <Link href={'/auth'}>
          <button className="bg-white text-blue-800 px-4 py-2 rounded-md hidden md:block">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
