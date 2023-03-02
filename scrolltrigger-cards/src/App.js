import React, { useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const gridItemsRef = useRef(null);

  useEffect(() => {
    const gridItems = gridItemsRef.current.querySelectorAll(".grid-item");

    gsap.registerPlugin(ScrollTrigger);

    gridItems.forEach((item, index) => {
      gsap.from(item, {
        duration: 1,
        autoAlpha: 0,
        y: 100,
        scale: 0.5,
        visibility: "hidden",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 60%",
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="grid-container" ref={gridItemsRef}>
       <div className="grid-before"></div>
        <div className="grid-item grid-item-1"></div>
        <div className="grid-item grid-item-2"></div>
        <div className="grid-item grid-item-3"></div>
        <div className="grid-item grid-item-4"></div>
        <div className="grid-item grid-item-5"></div>
        <div className="grid-item grid-item-6"></div>
        <div className="grid-item grid-item-7"></div>
        <div className="grid-item grid-item-8"></div>
        <div className="grid-item grid-item-9"></div>
        <div className="grid-item grid-item-10"></div>
        <div className="grid-item grid-item-11"></div>
        <div className="grid-item grid-item-12"></div>
        <div className="grid-item grid-item-13"></div>
        <div className="grid-item grid-item-14"></div>
        <div className="grid-item grid-item-15"></div>
        <div className="grid-item grid-item-16"></div>
        <div className="grid-item grid-item-17"></div>
      </div>
    </div>
  );
}

export default App;
