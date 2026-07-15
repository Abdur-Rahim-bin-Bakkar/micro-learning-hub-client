"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);


  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };


    const mouseOver = (e: MouseEvent) => {

      const target = e.target as HTMLElement;


      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {

        setHover(true);

      } else {

        setHover(false);

      }

    };


    window.addEventListener(
      "mousemove",
      moveCursor
    );


    window.addEventListener(
      "mouseover",
      mouseOver
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );


      window.removeEventListener(
        "mouseover",
        mouseOver
      );

    };


  }, []);



  return (

    <>

      {/* Main Cursor */}

      <div

        className={`
          fixed top-0 left-0 z-[9999]
          pointer-events-none
          rounded-full
          transition-transform duration-150
          ${
            hover
            ? "w-10 h-10 bg-orange-500/30 scale-150"
            : "w-5 h-5 bg-orange-500"
          }
        `}

        style={{
          transform:
            `translate(${position.x - 10}px, ${position.y - 10}px)`
        }}

      />



      {/* Outer Ring */}

      <div

        className="
          fixed top-0 left-0
          z-[9998]
          pointer-events-none
          w-10 h-10
          border-2 border-orange-500
          rounded-full
          opacity-50
        "

        style={{
          transform:
            `translate(${position.x - 20}px, ${position.y - 20}px)`
        }}

      />


    </>

  );

};


export default CustomCursor;