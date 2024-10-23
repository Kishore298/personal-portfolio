import React, { useEffect, useRef } from "react";
import resume from "./assets/images/Kishore k.docx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const textRef = useRef(null);
  const deletingRef = useRef(false);
  const text = "I'm a Full Stack Web Developer";
  const indexRef = useRef(0);

  useEffect(() => {
    const type = () => {
      if (deletingRef.current) {
        if (indexRef.current > 0) {
          indexRef.current--;
          textRef.current.textContent = text.substring(0, indexRef.current);
        } else {
          deletingRef.current = false;
        }
      } else {
        if (indexRef.current < text.length) {
          indexRef.current++;
          textRef.current.textContent = text.substring(0, indexRef.current);
        } else {
          deletingRef.current = true;
        }
      }
      setTimeout(type, deletingRef.current ? 100 : 350);
    };

    type();

    return () => clearTimeout(type);
  }, [text]);

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-white px-5"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 text-center">
        I'M KISHORE
      </h1>
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mt-4 typing"
        ref={textRef}
      >
        {text}
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-center max-w-xl mt-6 mb-6 text-gray-700">
        I'm a passionate web developer with a love for creating dynamic and
        responsive web applications.
      </p>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-orange-600 flex items-center">
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        <a href="#contact">Contact Me</a>
      </button>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-orange-600">
        <a href={resume} download aria-label="Download Resume">
          <FontAwesomeIcon icon={faFileDownload} /> Download My Resume
        </a>
      </button>
    </section>
  );
};

export default Home;
