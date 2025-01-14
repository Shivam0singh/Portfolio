/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sentence = ["Hello", " I'm a", " Passionate", " Web", " Developer"];

export const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setWordIndex((prevIndx) => (prevIndx + 1) % sentence.length);
    }, 400);
    return () => clearInterval(intervalTime);
  }, []);

  // Function to generate words and their color changes
  const wordStyles = (index: number) => {
    return {
      animation: `colorChange 2s ease-in-out infinite ${index * 0.2}s`,
    };
  };

  return (
    <>
      <div className="pt-20">
        <div className="hero-image-colortext flex flex-col justify-center items-center min850:flex-row min850: [max-width:900px] mx-auto">
          <div className="myImageContainer flex justify-center basis-1/2">
            <Image
              className="rounded-3xl"
              src="/assets/images/my-picture2.png"
              alt="my-image"
              width={300}
              height={300}
            />
          </div>
          <div className="hero-text w-screen basis-1/2">
            <h1 className="text-3xl font-bold mb-2 pt-3 items-center text-center">
              {sentence.map((word, index) => (
                <span
                  key={index}
                  style={wordStyles(index)}
                  className="inline-block"
                >
                  {word}
                  {"\u00A0"}
                </span>
              ))}
            </h1>
            <p className="text-lg mb-6 p-4 text-center">
              Turning ideas into beautiful, functional, and user-friendly web
              experiences. Let's build something amazing together!
            </p>

            <div className="connect-With-Me my-animation text-3xl">
              <h1 className="text-center">Connect With Me</h1>
              <div className="icons-connections flex gap-4 p-3 flex-row justify-center">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-orange-500"
                >
                  <FaGithub className="text-2xl" />
                </a>{" "}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-orange-500"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-content text-center py-2 text-white">
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-purple-100 text-black font-medium rounded-full shadow-lg hover:bg-purple-950 hover:text-white transition duration-300">
              <span>Explore My Work</span>
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white font-medium rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
              <span>Download My Resume</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
