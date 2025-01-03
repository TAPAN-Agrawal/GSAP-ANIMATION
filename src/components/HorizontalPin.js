import React, { useEffect, useLayoutEffect, useRef } from "react";
import './horizontalpin.css'
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);


function HorizontalPin() {
  let component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".dem2", {
        scrollTrigger: {
          trigger: ".page2",
          start: "top 30%",
          // end: "bottom 0%",
          scrub:2,
          pin: true,
          // pinSpacing: false,
          // markers: true
          
        },
        x:-900,
        opacity:'1'
      });
    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);
  return (
    <div className="App" ref={component}>
      <div className="page">
        <h1 >Demo</h1>
      </div>
      <div className="page2" style={{height: 'auto'}}>
        <h1 className="dem2" style={{marginLeft: '100px'}}>How are you Tapan</h1>
      </div>
      <div className="page">
        <h1>Demo3</h1>
      </div>
    </div>
  );
}

export default HorizontalPin;
