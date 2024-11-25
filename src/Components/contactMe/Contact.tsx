import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { TiltCard } from "../HoverCard/HoverCard";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_n33ncdk",
        "template_lvy32fj",
        e.currentTarget,
        "cvroPlCxi6T88sgGh"
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully!");
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setResponseMessage("An error occurred, please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <TiltCard
      section={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full mx-auto h-full   text-white p-4 md:p-6 rounded-xl flex flex-row justify-evenly  items-center  gap-2  "
        >
          <div className="text-center w-1/2">
            <h2 className="text-2xl font-bold font-inter uppercase mb-5">
              Contact Me
            </h2>
            <p className="mb-5 text-gray-300">
              Feel free to reach out if you have any questions or want to
              connect. I’m always open to new opportunities and collaborations!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/abdelhalim.bensalem.50"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl text-gray-300 hover:text-blue-500 transition duration-300" />
              </a>
              <a
                href="https://x.com/bensalemHalim19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/bensalem-abdelhalim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-600 transition duration-300" />
              </a>
              <a
                href="https://instagram.com/bensalem_halim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-gray-300 hover:text-pink-500 transition duration-300" />
              </a>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="h-full w-1/2 p-4  space-y-1 flex flex-col text-left  justify-start  "
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 md:p-3 bg-slate-900 text-white rounded-lg   focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 md:p-3 bg-slate-900  text-black rounded-lg  focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-2 md:p-3 bg-slate-900 text-black rounded-lg  focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 md:py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <p className="mt-3 text-center text-sm">{responseMessage}</p>
          )}
        </motion.div>
      }
    ></TiltCard>
  );
};

export default Contact;
