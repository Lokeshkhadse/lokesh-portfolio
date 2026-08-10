import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Correct syntax for @emailjs/browser
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully 🚀");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Something went wrong 😢. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-16 px-10 mx-0 md:py-20 md:px-10 md:mx-0 lg:py-20 lg:px-20 lg:mx-8"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? I'm always open to discussing new
          opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="w-full flex flex-col gap-4 bg-glow py-6 px-6">
          <div className="rounded-xl bg-gradient-to-br from-white/5 to-transparent 
                border border-white/10 px-2 py-4 md:px-6 md:py-5 bg-glow-1">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-purple-400">email</span>
                <span className="text-gray-500">:</span>
                <span className="text-white break-all">
                  lokeshkhadse19@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-purple-400">location</span>
                <span className="text-gray-500">:</span>
                <span className="text-white">
                  Pune, India · Remote Friendly
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-purple-400">availability</span>
                <span className="text-gray-500">:</span>
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-400">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-bold text-white leading-tight ml-2">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 
                   bg-clip-text text-transparent">
              Production-Ready Code
            </span>
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 bg-glow-1">
              <span className="text-purple-400 font-mono text-sm">01</span>
              <div>
                <p className="text-white font-medium">Scalable Architecture</p>
                <p className="text-sm text-gray-400">
                  Well-structured backend & frontend architecture designed to scale and stay maintainable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 bg-glow-1">
              <span className="text-purple-400 font-mono text-sm">02</span>
              <div>
                <p className="text-white font-medium">Secure & Reliable Code</p>
                <p className="text-sm text-gray-400">
                  Authentication, authorization, validations, and best practices built in from day one.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 bg-glow-1">
              <span className="text-purple-400 font-mono text-sm">03</span>
              <div>
                <p className="text-white font-medium">End-to-End Ownership</p>
                <p className="text-sm text-gray-400">
                  From understanding requirements to deployment-ready features — I handle the full cycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full bg-glow rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-mono text-purple-400">
              POST <span className="text-gray-400">/contact</span>
            </p>
            <span className="text-xs text-gray-400 font-mono">
              application/json
            </span>
          </div>

          <div className="font-mono text-sm text-gray-300 space-y-4">
            <p className="text-gray-500">{"{"}</p>

            <div className="flex flex-col gap-2 pl-4">
              <label className="text-purple-400">"name":</label>
              <input
                name="from_name"
                type="text"
                placeholder="Your name"
                required
                className="bg-transparent border-b border-white/20 focus:border-purple-500 outline-none text-white placeholder-gray-500 py-2"
              />
            </div>

            <div className="flex flex-col gap-2 pl-4">
              <label className="text-purple-400">"email":</label>
              <input
                name="from_email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-transparent border-b border-white/20 focus:border-purple-500 outline-none text-white placeholder-gray-500 py-2"
              />
            </div>

            <div className="flex flex-col gap-2 pl-4">
              <label className="text-purple-400">"subject":</label>
              <input
                name="subject"
                type="text"
                placeholder="Reason for messaging"
                required
                className="bg-transparent border-b border-white/20 focus:border-purple-500 outline-none text-white placeholder-gray-500 py-2"
              />
            </div>

            <div className="flex flex-col gap-2 pl-4">
              <label className="text-purple-400">"message":</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="bg-transparent border border-white/20 rounded-lg focus:border-purple-500 outline-none text-white placeholder-gray-500 p-3 resize-none"
              />
            </div>

            <p className="text-gray-500">{"}"}</p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="button w-full sm:w-auto px-6 py-3 rounded-lg"
            >
              <span className="inner flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <span>Send Message</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;