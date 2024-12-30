import { useEffect, useState } from "react";
import './App.css';
import { gsap } from "gsap";
import Rendering from "./components/Rendering";
import Emittion from "./components/Emittion";
import Scroll from "./components/Scroll";

function App() {
  const [position,setPosition]=useState(0)
  const [positionY,setPositionY]=useState(0)


 
  const timeline = (newPosition) => {
    let tl = gsap.timeline();
    tl.to(".green", { x: newPosition,y:positionY, duration: 2, });
  };
  const up = () => {
    setPositionY((y) => y - 100);

  };

  const down = () => {
    setPositionY((y) => y + 100);
    

  };

  const left = () => {
   console.log("position",position);
   

      setPosition((x) => x - 100);
                                                                                                                               
    


  };

  const right = () => {
    
    setPosition((x) => x+100);
  

  };
  // Add event listener for keydown
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          up();
          break;
        case 'ArrowDown':
          down();
          break;
        case 'ArrowLeft':
          left();
          break;
        case 'ArrowRight':
          right();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown); 
    };
  }, []); // Empty d

  useEffect(() => {
    timeline(position);
  }, [position,positionY]); // Call timeline whenever position changes
  return (
    <div >
      <Emittion/>
      {/* <Scroll/> */}
                                                                                                                                                                          
      {/* <Rendering/> */}
     {/* <div class="box  green">
      A
      <div className="ball"></div>
      </div> */}

    </div>
  );
}

export default App;
