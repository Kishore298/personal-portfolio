import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import image1 from "./assets/images/web-design-technology-browsing-programming-concept_1206413-21760.webp";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col md:flex-row items-center m-auto justify-evenly w-full md:px-10">
        <motion.section
          id="about"
          className="about-section flex flex-col items-center bg-white p-10 md:p-16"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative mb-6">
            About Me
            <span className="absolute left-0 bottom-0 top-10 w-full h-1 bg-orange-500"></span>
          </h2>
          <motion.p
            className="text-xl max-w-xl font-sans mb-6 text-gray-700 leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            As a recent graduate with a degree in Computer Science and
            Engineering, I am excited to embark on my career in the IT industry.
            I am a dedicated web developer who enjoys crafting dynamic and
            responsive web applications. With a solid foundation in both <span className="text-black text-bold underline">
            Frontend and Backend Technologies</span>, I thrive on projects that
            challenge me to learn and grow...
          </motion.p>
          <motion.p
            className="text-xl max-w-xl font-sans mb-6 text-gray-700 leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            I have developed a range of skills in web technologies, which I’ve
            outlined below. Currently, I am seeking a full-time job opportunity
            and would be extremely grateful for any chance to contribute and
            grow!..
          </motion.p>
          <motion.div
            className="flex gap-6 mt-4 text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            <a
              href="https://github.com/kishore298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kishore-k-63b4aa250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/k_i_s_h_o_r_e_02_09_08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
            >
              <FaInstagram />
            </a>
          </motion.div>
          <motion.button
            className="bg-orange-500 text-white py-2 px-6 rounded-md mt-6 hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105"
            initial={{ y: 30, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            <a
              href="#contact"
              className="flex items-center text-lg text-white hover:underline"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />{" "}
              Contact Me
            </a>
          </motion.button>
        </motion.section>
        <motion.img
          src={image1}
          alt="Profile"
          className="rounded-full w-64 h-64 md:w-96 md:h-96 mt-10 md:mt-0"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0}}
        />
      </div>
    </div>
  );
};

export default About;
