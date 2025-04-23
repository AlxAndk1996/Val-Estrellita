const container = document.getElementById('love-container');
const message = document.querySelector('.message');
const scene = document.querySelector('.scene');

// Esperar a que el muñequito aparezca
setTimeout(() => {
  container.classList.add('visible');

  // Generar coordenadas del corazón
  const heartShape = [];
  for (let t = 0; t < Math.PI * 2; t += 0.2) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    heartShape.push([x, -y]);
  }

  const delayStep = 100;
  let delay = 0;

  // Crear corazones
  heartShape.forEach(([x, y]) => {
    const heart = document.createElement('div');
    heart.className = 'Heart';
    heart.style.left = `${50 + x * 2.5}%`;
    heart.style.top = `${50 + y * 2.5}%`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.style.opacity = 1;
      heart.style.transform = 'scale(1.2)';
    }, delay);

    delay += delayStep;
  });

  // Hacer que el corazón flote
  setTimeout(() => {
    container.classList.add('flotar');
  }, delay + 500);

  // Mostrar mensaje
  setTimeout(() => {
    message.style.opacity = 1;
  }, delay + 2000);

}, 2000);
