import React, { useEffect } from "react";
import "./scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Scroll() {
  useEffect(() => {
    gsap.to(".box-a", {
      scrollTrigger: {
        trigger: ".box-c",
        start: "center bottom",
        end:'center center',
        scrub: 5,
      
      },
      x: 100,
      ease:'none'
    });
    gsap.to(".box-b", {
      scrollTrigger: {
        trigger: ".box-c",
        start: "center bottom",
        end:'center center',
        scrub: 3,
      },
      x: 700,
      ease:'none'
    });
    gsap.to(".box-c", {
      scrollTrigger: {
        trigger: ".box-c",
        start: "center bottom",
        end:'center center',
        scrub: 1,
      },
      x: 1400,
      ease:'none'
    });
    
    
  }, []);

  return (
    <>
      <h1>Delecious Sweets</h1>
    <div className="parent">
      
   <div className="box-a">
   <img height="100%" width="100%" src="https://img.freepik.com/premium-photo/mix-mithai-milk-made-sweets-indian-pakistani-festivals_466689-12231.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"/>

   </div>
   <div className="box-b">
    <img height="100%" width="100%" src="https://img.freepik.com/free-photo/eastern-sweets_114579-8911.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"/>
   </div>
   <div className="box-c">
    <img height="100%" width="100%" src="https://img.freepik.com/free-photo/eastern-sweets_2829-14162.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"/>
   </div>


    </div>
    </>
  );
}

export default Scroll;
