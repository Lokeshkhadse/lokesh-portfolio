import React from "react";
import myPhoto from "../assets/Profile_Pic.jpg"; // Use your own photo

const About = () => {
  return (
    <section id="about" className="text-white py-20">
      <div className="text-center mb-12 px-4 mt-4">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          Java Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-[420px]">
            <img
              src={myPhoto}
              alt="Lokesh Khadse"
              className="w-full h-full rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-4 bg-glow">
            <p className="text-gray-200 leading-relaxed text-lg">
              Hi, I'm <strong>Lokesh Khadse</strong>, a highly motivated <strong>Java Full Stack Developer</strong> with 2+ years of experience specializing in designing and deploying scalable, secure enterprise applications.
            </p>

            <p className="text-gray-200 leading-relaxed text-lg">
              I have expertise in <strong>Java, Spring Boot, Microservices, React, REST APIs, and SQL</strong>, with modern DevOps practices including <strong>AWS, Azure, and Docker</strong>. I'm passionate about optimizing database performance, enhancing user experiences, and streamlining development workflows in agile environments.
            </p>

            <p className="text-gray-200 leading-relaxed text-lg">
              I believe in writing clean, maintainable code and continuously learning new technologies to build better solutions for real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;