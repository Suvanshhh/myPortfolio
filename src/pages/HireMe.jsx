import React, { useState } from "react";

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes (unchanged)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (unchanged)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Form Submitted Successfully");

    // Optionally reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-16">
      <h1 className="text-2xl text-white mb-16 text-center">Contact / Hire Me</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 m-10 bg-white shadow-lg rounded-lg flex flex-col space-y-4"
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <h1 className="text-black text-3xl mb-2 font-[font6]">Contact me:</h1>
          <label
            className="block text-lg font-[font4] font-medium text-black mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={formData.name} // Ensures form is controlled
            onChange={handleChange} // Updates state when typing
            className="w-full p-4 border text-black border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            className="block text-lg font-[font4] text-black font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email} // Ensures form is controlled
            onChange={handleChange} // Updates state when typing
            className="w-full p-4 border border-gray-300 text-black rounded-lg"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label
            className="block font-[font4] text-black text-lg font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message} // Ensures form is controlled
            onChange={handleChange} // Updates state when typing
            className="w-full p-4 border text-black border-gray-300 rounded-lg"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-4 font-[font4] bg-black text-white text-xl font-bold rounded-lg hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HireMe;