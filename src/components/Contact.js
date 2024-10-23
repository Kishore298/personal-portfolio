import React, { useState } from "react";
import { init, send } from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  init("hOhSwbDg3fFCjLx34");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.subject) newErrors.subject = "Subject is required.";
    if (!form.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    send("service_i9vamxe", "template_b84z0gp", form)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-gray-200 p-6 flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-3xl relative mb-6">
        Contact Me
        <span className="absolute left-0 bottom-0 top-10 w-full h-1 bg-orange-500"></span>
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col">
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 p-3 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email ex: yours@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1 p-3 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="mb-4 p-3 border border-gray-300 rounded-md"
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject}</span>
        )}
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="mb-4 p-3 border border-gray-300 rounded-md resize-none"
          style={{ height: "150px" }}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded-md hover:opacity-80"
        >
          Submit
        </button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl mb-4 relative inline-block">
          Contact Details
          <span className="block h-1 bg-orange-500 mt-1 w-full" />
        </h2>
        <p className="text-lg">
          <span className="text-xl text-orange-500">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            Phone:
          </span>
          6374418536
        </p>
        <p className="text-lg">
          <span className="text-xl text-orange-500">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            Email:
          </span>
          Kishore103345@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
