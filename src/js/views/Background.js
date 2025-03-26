import React, { useEffect } from "react";
import "../../styles/index.css";

const Background = () => {
  useEffect(() => {
    function createStars() {
      const app = document.getElementById("star-container");
      if (!app) return;
      app.innerHTML = "";
      const numberOfStars = 150;
      const starSizeMin = 1;
      const starSizeMax = 3;

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * (starSizeMax - starSizeMin) + starSizeMin;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${y}px`;
        star.style.left = `${x}px`;

        app.appendChild(star);
      }
    }

    function animateStars() {
      const stars = document.querySelectorAll(".star");
      let speed = 0.1;

      function moveStars() {
        stars.forEach((star) => {
          const currentLeft = parseFloat(star.style.left);
          const newLeft = currentLeft + speed;

          if (newLeft > window.innerWidth) {
            star.style.left = `-${star.offsetWidth}px`;
            const newTop = Math.random() * window.innerHeight;
            star.style.top = `${newTop}px`;
          } else {
            star.style.left = `${newLeft}px`;
          }
        });
        requestAnimationFrame(moveStars);
      }
      moveStars();
    }

    createStars();
    animateStars();
    window.onresize = createStars;
  }, []);

  return <div id="star-container" className="star-background"></div>;
};

export default Background;
