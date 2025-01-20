import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <h2 className="text-3xl font-serif font-bold text-center mb-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-8 rounded-lg"
        style={{
          border: '1px solid #e0e0e0', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-serif font-semibold text-lg mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            style={{ fontSize: '1rem' }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-serif font-semibold text-lg mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            style={{ fontSize: '1rem' }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-serif font-semibold text-lg mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            rows={5}
            required
            style={{ fontSize: '1rem' }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
