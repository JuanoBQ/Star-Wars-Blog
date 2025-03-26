// Crear estrellas aleatorias y agregarlas al contenedor de estrellas
function createStars() {
  const app = document.getElementById("app");
  const numberOfStars = 150; // Número de estrellas
  const starSizeMin = 1; // Tamaño mínimo de las estrellas
  const starSizeMax = 3; // Tamaño máximo de las estrellas

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * (starSizeMax - starSizeMin) + starSizeMin;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Establecer propiedades aleatorias de las estrellas
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;

    app.appendChild(star);
  }
}

// Animación de movimiento continuo de estrellas
function animateStars() {
  const stars = document.querySelectorAll(".star");
  const app = document.getElementById("app");

  // Mover las estrellas de forma continua
  let speed = 0.05; // Velocidad de movimiento de las estrellas

  function moveStars() {
    stars.forEach((star) => {
      const currentLeft = parseFloat(star.style.left);
      const newLeft = currentLeft + speed;

      if (newLeft > window.innerWidth) {
        // Cuando una estrella sale del lado derecho, la movemos al lado izquierdo
        star.style.left = `-${star.offsetWidth}px`;
        const newTop = Math.random() * window.innerHeight;
        star.style.top = `${newTop}px`; // Reposicionar aleatoriamente
      } else {
        // De lo contrario, mantener el movimiento
        star.style.left = `${newLeft}px`;
      }
    });

    requestAnimationFrame(moveStars); // Continuar el movimiento
  }

  moveStars(); // Iniciar la animación
}

// Ejecutar la creación de estrellas
createStars();

// Ejecutar la animación de las estrellas
animateStars();

// Redibujar las estrellas cuando el tamaño de la ventana cambie
window.onresize = function () {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Limpiar las estrellas existentes
  createStars(); // Volver a crear las estrellas
};
