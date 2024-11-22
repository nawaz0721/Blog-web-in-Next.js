"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 text-center py-20 px-4">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-800"
          whileHover={{ scale: 1.05, color: "#1e3a8a" }} // Darker blue on hover
          transition={{ type: "spring", stiffness: 300 }}
        >
          Welcome to MyBlog
        </motion.h1>
        
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Discover the latest articles, trends, and tips in our blog.
        </motion.p>
        
        <Link href={'/blogs'}>
          <motion.button
            className="mt-8 bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Start Reading
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
