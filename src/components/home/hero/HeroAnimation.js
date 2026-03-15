import React, { useEffect } from "react";
var col = require("nice-color-palettes");

export default function HeroAnimation() {
  useEffect(() => {
  const interval = setInterval(() => {
    const elements = document.getElementsByClassName("color-block");

    if (elements.length === 0) return;

    const randomIndex = Math.floor(Math.random() * elements.length);
    const elem = elements[randomIndex];

    if (!elem) return;

    elem.style.scale = "1.2";
    elem.style.zIndex = "10";

    setTimeout(() => {
      elem.style.scale = "1";
      elem.style.zIndex = "1";
    }, 1000);
  }, 1000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="flex flex-wrap scale-150 items-center justify-center">
      {col.map((colors, i) => (
        <div key={i} className="flex items-center">
          {colors.map((color, i) => (
            <div key={i} className="group h-9 sm:h-12">
              <button
                style={{ background: color }}
                className="w-9 sm:w-12 h-9 sm:h-12 group-hover:rounded-[1.5rem] group-hover:scale-75 color-block transition-all ease-in-out relative duration-300 focus:rounded-none focus:animate-spin outline-none focus:z-20"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
