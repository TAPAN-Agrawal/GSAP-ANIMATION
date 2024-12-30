import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

function Rendering() {
    const app = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      gsap.to(".square", { rotate: 360, duration: 5 });

    }, app);

    return () => ctx.revert();

  }, [])
  return <div ref={app}>
  <div className="square">Hello World</div>
</div>;
}

export default Rendering;
