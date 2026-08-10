import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import HeroRight from "./Hero-right";

function Hero() {
    // Google Drive direct download link
    const resumeDriveLink = "https://drive.google.com/uc?export=download&id=1_rsWkPyyzzR6A1CWaN0aHsC8PcVys1WD";
    const resumeViewLink = "https://drive.google.com/file/d/1_rsWkPyyzzR6A1CWaN0aHsC8PcVys1WD/view?usp=sharing";

    return (
        <section id='home' className="bg-grid-animated min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 mx-4 sm:mx-8 md:mx-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 w-full">

                <div className="lg:col-span-2 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                        Hi, I’m <span className="text-purple-400">Lokesh Khadse</span>
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2 sm:mb-3 font-size">
                        I am a{' '}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <Typewriter
                                words={['Java Full Stack Developer', 'Spring Boot Developer', 'React Developer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1200}
                            />
                        </span>
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        Designing and deploying scalable, secure enterprise applications with modern full-stack technologies.
                    </p>
                    
                    {/* Button Group - View & Download */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-2">
                        {/* View Button - Opens in new tab */}
                        <a 
                            href={resumeViewLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex"
                        >
                            <button type="button" className="button w-full sm:w-auto">
                                <span className="inner">
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        style={{width: "22px", height: "22px", marginBottom: "4px"}}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                    View Resume
                                </span>
                            </button>
                        </a>

                        {/* Download Button - Downloads directly from Google Drive */}
                        <a 
                            href={resumeDriveLink} 
                            download="Lokesh_Khadse_Resume.pdf"
                            className="inline-flex"
                        >
                            <button type="button" className="button w-full sm:w-auto">
                                <span className="inner">
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        style={{width: "22px", height: "22px", marginBottom: "4px"}}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        />
                                    </svg>
                                    Download Resume
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-3 flex justify-center items-center mt-6 md:mt-0">
                    <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl flex items-center justify-center">
                        <HeroRight />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;