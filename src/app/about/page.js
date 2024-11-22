"use client";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 py-10 px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <motion.h1
            className="text-4xl font-bold text-blue-800 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to MyBlog! We are passionate about sharing knowledge, insights, and trends across various topics. Our
            mission is to empower readers with valuable, high-quality content that’s informative and engaging.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Our team consists of experienced writers, researchers, and professionals who are committed to bringing you the
            best articles and resources. Whether you are looking for tips, news, or in-depth guides, we have got something
            for everyone.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold text-blue-800 mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05, color: "#1D4ED8" }}
          >
            Our Mission
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Our mission is to create a space where people can learn, grow, and stay updated. We believe in the power of
            knowledge and are here to support our readers in their journey to understanding the world better.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold text-blue-800 mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05, color: "#1D4ED8" }}
          >
            Our Team
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            We are a diverse team of passionate writers, editors, and creators who love exploring new ideas and sharing
            them with our community. Each article is crafted with care to ensure you get accurate, helpful, and inspiring
            information.
          </motion.p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
