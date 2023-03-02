// import React from "react";
import gsap, { Power3 } from "gsap";
import  ScrollTrigger from "gsap/ScrollTrigger";

const RunAnimation = () => {
  gsap.registerPlugin(Power3, ScrollTrigger)
  const tl = gsap.timeline();
  gsap.set(".flex-container .flex-item", {y: 100})

  tl.to(".flex-before:first-child", { duration: 2, ease: Power3, y: 0})
  tl.to(".flex-container .flex-item", {
    duration: 1.5,
    autoAlpha: 1,
    y: 0,
    scale: 1,
    scrollTrigger: {
        trigger: ".flex-container .flex-item",
        markers: true,
        // Trigger Scroller
        start: "top 95%",
        end: "bottom 70%",
        scrub: true,
        once: true,
    }
})
// tl.to(".flex-before:first-child", { duration: 2, ease: Power3, y: 0})
}

export default RunAnimation;
