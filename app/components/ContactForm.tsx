import React from "react";

const ContactForm = () => {
  return (
    <form className="max-w-md mx-auto rounded shadow-lg">
      <h2 className="xl:text-4xl text-3xl font-bold xl:mb-10 mb-5 text-zinc-300">
        Contact Me
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-md text-zinc-300 pb-3">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          name="name"
          className="w-full px-4 py-4 text-sm text-gray-100 placeholder-gray-400 bg-transparent border border-gray-600 rounded-md shadow-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-md text-zinc-300 pb-3">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          className="w-full px-4 py-4 text-sm text-gray-100 placeholder-gray-400 bg-transparent border border-gray-600 rounded-md shadow-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="subject"
          className="block text-md text-zinc-300 pb-3"
        >
          Your Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="bg-transparent border py-4 border-gray-600 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-blue-500"
          placeholder="Enter your Subject"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-md text-zinc-300 pb-3">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your message"
          name="message"
          className="w-full px-4 py-2 text-sm text-gray-100 placeholder-gray-400 bg-transparent border border-gray-600 rounded-md shadow-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gradient-to-r from-purple-800 to-cyan-800 hover:bg-blue-700 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
