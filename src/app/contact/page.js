"use client";
import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-6">
        <motion.div
          className="container mx-auto max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
            Contact Us
          </h1>

          {submitted ? (
            <motion.div
              className="bg-green-100 text-green-800 p-4 rounded-md text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Thank you for your message! We’ll get back to you soon.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <motion.input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <motion.input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Message</span>
                <motion.textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </label>
              <motion.button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded-md w-full font-semibold hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
