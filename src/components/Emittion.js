import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./emmition.css";
import img from "../rb_843.png";

function Emittion() {
  const [visible, setVisible] = useState("none");
  const [linearGradiant, setLinearGradient] = useState(
    `linear-gradient(rgb(13 14 14), rgb(109 100 79))`
  );
  const raysRef = useRef([]);

  useEffect(() => {
    // Delay the start of the animation by 3 seconds
    gsap.delayedCall(3, () => {
      raysRef.current.forEach((ray) => {
        gsap.fromTo(
          ray,
          { scaleY: 0.5, opacity: 1 },
          {
            scaleY: 2,
            opacity: 0,
            duration: 1,
            repeat: -1,
            ease: "power1.out",
            stagger: 0.1,
          }
        );
      });
    });
    // Stop the animation 3 seconds after it starts (6 seconds total)
    const stopTimeout = setTimeout(() => {
      raysRef.current.forEach((ray) => {
        gsap.killTweensOf(ray); // Stops all ongoing animations for each ray
      });
    }, 5000);

    return () => clearTimeout(stopTimeout); // Cleanup timeout on unmount
  }, []);

  setTimeout(() => {
    setVisible("block");
  }, 3000);

  useEffect(() => {
    let t1 = gsap.timeline();
    t1.to(".yellow", { y: -1000, duration: 2 });
    t1.to(".yellow", {
      y: -1000,
      duration: 2,
      boxShadow:
        "0 0 20px 10px rgba(255, 223, 0, 0.8), 0 0 30px 20px rgba(255, 223, 0, 0.6)",
    });
  }, []);

  setTimeout(() => {
    setLinearGradient(`linear-gradient(to bottom, 	#ff3377, #ff77aa)`);
  }, 4000);

  useEffect(() => {
    let t1 = gsap.timeline();
    let t2 = gsap.timeline();
    let t3 = gsap.timeline();

    setTimeout(() => {
      t1.to(".sweet1", {
        x: -300,
        duration: 2,
      });
      t1.to(".sweet1", {
        y: 500,
        duration: 2,
      });
      t1.to(".sweet1", {
        x: -500,
        duration: 2,
      });

      t2.to(".sweet2", {
        x: 300,
        duration: 2,
      });
      t2.to(".sweet2", {
        y: 500,
        duration: 2,
      });
      t2.to(".sweet2", {
        x: 500,
        duration: 2,
      });

      t1.to(".circle-img",{
        x:-880,
        scale:1.5,
        duration:3,
        rotate:720
      })
      t1.to(".circle-img",{
        y:-220,
        scale:1.5,
        duration:2,
        rotate:360
      })
      t1.to(".circle-img",{
       
        scale:2,
        duration:1,
        borderRadius:'20px'
      })


     
    }, 5000);
  }, []);

  return (
    <div className="sun-container" style={{ background: linearGradiant }}>
      <div className="yellow"></div>
      <div className="sun" style={{ display: visible }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="ray"
            ref={(el) => (raysRef.current[i] = el)}
            style={{ transform: `rotate(${i * (360 / 20)}deg)` }}
          />
        ))}
      </div>
      <div className="text">
        <div className="sweet1">
          <img
            style={{ borderRadius: "30px", height: "200px", width: "200px" }}
            src="https://img.freepik.com/free-photo/front-view-chocolate-cookies-with-cream-inside-plate-colored-surface_140725-20237.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"
          />
        </div>
      </div>
      <div className="text">
        <div className="sweet2">
          <img
            style={{ borderRadius: "30px", height: "200px", width: "200px" }}
            src="https://img.freepik.com/free-photo/top-view-cookies-cakes-with-cream-fresh-red-cranberries-th-epurple-surface_140725-27635.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"
          />
        </div>
      </div>
      <div className="circle">

      <img className="circle-img"  src="https://img.freepik.com/free-photo/top-view-cup-tea-with-colorful-french-macarons-bagels-light-pink-wall-cake-biscuit-sugar-sweet-pie-tea-cookie_140725-65737.jpg?ga=GA1.1.277611718.1716361546&semt=ais_hybrid"/>
      </div>
    </div>
  );
}

export default Emittion;
