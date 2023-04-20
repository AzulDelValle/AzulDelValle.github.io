let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #0560e3;">Soy estudiante de Ingeniería en Energía y estoy interesada en el desarrollo de programación!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
