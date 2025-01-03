import React, { useEffect } from "react";
import "./framesvg.css";
import gsap from "gsap";

function FrameSvg() {
  useEffect(() => {
    let svg = document.querySelector("svg");
    let path = svg.querySelector("path");
    const pathLength = path.getTotalLength();
    console.log("path length", pathLength);
    gsap.set(path, { strokeDasharray: pathLength });
    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        duration: 5,
        scrollTrigger: {
          trigger: ".svg-parent",
          start: "top top",
          end: "70% top",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className="container">
        <h1 style={{color:'wheat'}}>Natural Beauty</h1>
      <img
        className="left"
        src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"
      />
      <img src="https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid" />
      <img
        className="left"
        src="https://img.freepik.com/premium-photo/waterfall-mountains-with-pool-water-waterfall_865967-822846.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"
      />
      <img
        className=""
        src="https://img.freepik.com/premium-photo/lake-strbske-pleso-high-tatras-mountain-slovakia_146671-5856.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"
      />

      <div className="svg-parent">
        <svg
          width="800"
          height="1542"
          viewBox="0 0 241 542"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M239 0V159.467H2V352.324H239V540H2"
            stroke="url(#paint0_linear_2_5)"
            stroke-width="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_5"
              x1="120.5"
              y1="0"
              x2="120.5"
              y2="540"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#67A9FF" />
              <stop offset="0.51" stop-color="#5565A2" />
              <stop offset="1" stop-color="#180C5C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default FrameSvg;
