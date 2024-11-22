"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AboutSection() {
  const controls = useAnimation();

  // Trigger fade-in animation on mount
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section className="bg-blue-50 py-20 px-4">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <motion.h2
          className="text-3xl font-bold text-blue-800 mb-4"
          whileHover={{ scale: 1.05, color: "#2563eb" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Us
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          whileHover={{ scale: 1.02, color: "#1f2937" }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          MyBlog is a platform where you can explore insightful articles, learn new things, and stay updated with
          trends in various domains. We are passionate about delivering high-quality content for our readers.
        </motion.p>
      </motion.div>
    </section>
  );
}
