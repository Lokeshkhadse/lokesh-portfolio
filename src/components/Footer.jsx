import React from "react";

const Footer = () => {
    return (
        <section className="footer-wrapper relative py-10 sm:pt-16 lg:pt-12 bg-gray-900">
            <div className="footer-content">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8">
                        
                        {/* Column 1 - Brand Info */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3">
                                <span className="text-purple-400">Lokesh Khadse</span>
                            </h1>
                            <p className="text-base leading-relaxed text-gray-300 mt-3">
                                Java Full Stack Developer passionate about building scalable, secure enterprise applications.
                            </p>

                           
                        </div>

                        {/* Column 2 - Quick Links 1 */}
                        <div className="col-span-1">
                            <p className="text-sm font-semibold tracking-widest text-white uppercase mb-4">
                                Quick Links
                            </p>
                            <ul className="space-y-3 text-gray-200">
                                <li>
                                    <a href="#home" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        Skills
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Quick Links 2 */}
                        <div className="col-span-1">
                            <p className="text-sm font-semibold tracking-widest text-white uppercase mb-4">
                                Resources
                            </p>
                            <ul className="space-y-3 text-gray-200">
                                <li>
                                    <a href="#projects" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#education" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-base transition-all duration-200 hover:text-purple-500 hover:pl-1">
                                        Contact
                                    </a>
                                </li>
                              
                            </ul>
                        </div>

                        {/* Column 4 - Contact Info */}
                        <div className="col-span-1">
                            <p className="text-sm font-semibold tracking-widest text-white uppercase mb-4">
                                Get In Touch
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm">lokeshkhadse19@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm">Pune, India</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm">Available for opportunities</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="mt-12 mb-6 border-gray-700" />
                    
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-center text-gray-400">
                            © 2026 Lokesh Khadse. All rights reserved.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;