import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import programmerAnimation from "../assets/programmer.json";
import portfolioImg from "../assets/portfolio-long.png";

function HeroRight() {


  const imgRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const wrapper = scrollWrapperRef.current;
    if (!img || !wrapper) return;

    function updateVars() {
      // measured height of the screenshot (displayed width * natural ratio)
      const imgHeight = img.clientHeight;
      // store as CSS variable (used by keyframes)
      wrapper.style.setProperty("--img-height", `${imgHeight}px`);
    }

    // when image loads (or if already cached)
    if (img.complete) updateVars();
    img.addEventListener("load", updateVars);
    // update on resize (responsive)
    window.addEventListener("resize", updateVars);

    return () => {
      img.removeEventListener("load", updateVars);
      window.removeEventListener("resize", updateVars);
    };
  }, []);


  return (
    <div className="illustration-wrapper relative w-full max-w-[600px] mx-auto">
      {/* 3D Programmer Lottie */}
      <div className="relative -top-8 -right-8 left-4 ">
        <Lottie
          animationData={programmerAnimation}
          loop={true}
          className="w-full h-auto"
        />
      </div>


      <div
        className="laptop-screen absolute overflow-hidden rounded-md shadow-xl hidden lg:block border-2 border-indigo-600"
        style={{
          left: "46.5%",
          top: "33.8%",
          width: "21%",
          height: "16.2%",
          transform: "skewY(30deg)",
        }}
        aria-hidden="true"
      >

        {/* scrolling wrapper */}
        <div
          ref={scrollWrapperRef}
          className="scrolling-wrapper w-full h-full"
          style={{ "--scroll-duration": "18s" }}
        >
          <div className="scrolling-content">
            <img
              ref={imgRef}
              src={portfolioImg}
              alt="portfolio screenshot"
              className="w-full block"
              draggable="false"
            />
            <img
              src={portfolioImg}
              alt=""
              className="w-full block"
              aria-hidden="true"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>


  );
}

export default HeroRight;
