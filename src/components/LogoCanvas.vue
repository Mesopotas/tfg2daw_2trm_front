<template>
    <canvas
      id="logoCanvas"
      width="180"
      height="90"  
      style="background-color: transparent;"  
    ></canvas>
  </template>
  
  <script>
  export default {
    name: 'Logo',
    mounted() {
      const canvas = document.getElementById('logoCanvas');
      const ctx = canvas.getContext('2d');
      let isHovered = false;
      let handPosition = 0;
  
      // Elementos del logo
      const elements = {
        person1: { x: 48, y: 27, handX: 72 },
        person2: { x: 120, y: 27, handX: 108 }
      };
  
      // Eventos de mouse
      canvas.addEventListener('mouseover', () => {
        isHovered = true;
        animateHands();
      });
  
      canvas.addEventListener('mouseout', () => {
        isHovered = false;
        resetPosition();
      });
  
      function drawLogo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // DIBUJAR PERSONA 1
        ctx.fillStyle = '#2c3e50';
        ctx.beginPath();
        ctx.arc(elements.person1.x, elements.person1.y, 12, 0, Math.PI * 2); // Cabeza
        ctx.fill();
        ctx.fillRect(elements.person1.x - 6, elements.person1.y + 12, 12, 24); // Cuerpo
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 3;
        // Brazo persona 1
        ctx.beginPath();
        ctx.moveTo(elements.person1.x - 6, elements.person1.y + 18);
        ctx.lineTo(elements.person1.handX, elements.person1.y + 13);
        ctx.stroke();
        
        // DIBUJAR PERSONA 2
        ctx.fillStyle = '#3498db';
        ctx.beginPath();
        ctx.arc(elements.person2.x, elements.person2.y, 12, 0, Math.PI * 2); // Cabeza
        ctx.fill();
        ctx.fillRect(elements.person2.x - 6, elements.person2.y + 12, 12, 24); // Cuerpo
        // Brazo persona 2
        ctx.beginPath();
        ctx.moveTo(elements.person2.x + 6, elements.person2.y + 18);
        ctx.lineTo(elements.person2.handX, elements.person2.y + 13);
        ctx.stroke();
        
        // DIBUJAR MANOS
        ctx.fillStyle = isHovered ? '#e74c3c' : '#e67e22'; // Color de mano cambia al hacer hover
        ctx.beginPath();
        ctx.arc(elements.person1.handX, elements.person1.y + 13, 3, 0, Math.PI * 2);
        ctx.arc(elements.person2.handX, elements.person2.y + 13, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // DIBUJAR SILLAS SIMÉTRICAS
        ctx.strokeStyle = '#808080';
        ctx.lineWidth = 2;
        
        // Silla de la persona 1
        ctx.beginPath();
        ctx.moveTo(elements.person1.x - 12, 68);
        ctx.lineTo(elements.person1.x + 12, 68);
        ctx.lineTo(elements.person1.x + 9, 63);
        ctx.lineTo(elements.person1.x - 9, 63);
        ctx.closePath();
        ctx.stroke();
        
        // Silla de la persona 2 
        ctx.beginPath();
        ctx.moveTo(elements.person2.x - 12, 68);
        ctx.lineTo(elements.person2.x + 12, 68);
        ctx.lineTo(elements.person2.x + 9, 63);
        ctx.lineTo(elements.person2.x - 9, 63);
        ctx.closePath();
        ctx.stroke();
        
  // Letras de abajo
  ctx.fillStyle = '#2c3e50';
      ctx.font = 'bold 16px "Arial", sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#2c3e50'; // sombreado a la letra
      ctx.shadowBlur = 2;
      ctx.fillText('LA OFICINA', canvas.width / 2, 90); 
    }
      function animateHands() {
        if (isHovered && handPosition < 12) {
          elements.person1.handX += 0.6;
          elements.person2.handX -= 0.6;
          handPosition++;
          drawLogo();
          requestAnimationFrame(animateHands);
        }
      }
  
      function resetPosition() {
        if (!isHovered && handPosition > 0) {
          elements.person1.handX -= 0.6;
          elements.person2.handX += 0.6;
          handPosition--;
          drawLogo();
          requestAnimationFrame(resetPosition);
        }
      }
  
      drawLogo();
    }
  };
  </script>
  
  <style scoped>
  </style>
  