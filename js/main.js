class NaveEspacial {
  constructor(nombre, tamano, direccion, motor, velocidad) {
    this.nombre = nombre;
    this.tamano = tamano;
    this.direccion = direccion;
    this.motor = motor;
    this.velocidad = velocidad;
  }

  // Metodo para encender el motor de la nave
  encenderMotor() {
    this.motor = true;
    motor.classList.add("encender");
  }

  // Metodo para apagar el motor de la nave
  apagarMotor() {
    this.motor = false;
    motor.classList.remove("encender");
  }

  // Metodo para mover la nave en una direccion especifica
  mover() {
    if (this.motor) {
        avanzar -= this.velocidad;
        estructura.style.transform = `rotate(${rotacion}deg) translateY(${avanzar}px)`;
    }
  }
  // Metodo para girar la nave
    girar(direcciongiro){
        if (this.motor) {
        switch(direcciongiro) {
            case "norte":
                rotacion = 0;
                break;
            case "sur":
                rotacion = 180;
                break;
            case "este":
                rotacion = 90;
                break;
            case "oeste":
                rotacion = -90;
                break;
        }
        estructura.style.transform = `rotate(${rotacion}deg) translateY(${avanzar}px)`;
        this.direccion = direcciongiro;
    }
    }

  // Metodo para cambiar la velocidad de la nave
  cambiarVelocidad(nuevavelocidad) {
    this.velocidad = nuevavelocidad;
  }
}

// Crear una instancia de la clase NaveEspacial
const naveExplorer = new NaveEspacial(
  "Explorer",
  "Mediana",
  "Norte",
  false,
  10
);
const naveVoyager = new NaveEspacial("Voyager", "Grande", "Norte", false, 15);

// VARIABLES SIMPLES Y CONSTANTES
const nave = document.getElementById("nave");
const estructura = document.getElementById("estructura");
const motor = document.getElementById("motor");
const motorEncendido = motor.classList.contains("encender");
let avanzar = 0;
let rotacion = 0;
// Segun la pulsacion de teclas, vamos a llamar a los metodos de la clase NaveEspacial
// Funcion de escuchar si pulsan una tecla
document.addEventListener("keydown", (event) => {
  switch (event.key.toLowerCase()) {
    case "e":
      // Encender el motor
      naveExplorer.encenderMotor();
      break;
    case "q":
      // Apagar el motor
      naveExplorer.apagarMotor();
      break;
    case "arrowup":
    case "w":
      naveExplorer.girar("norte");
      naveExplorer.mover();
      break;
    case "arrowdown":
    case "s":
      naveExplorer.girar("sur");
      naveExplorer.mover();
      break;
    case "arrowrigth":
    case "d":
      naveExplorer.girar("este");
      naveExplorer.mover();
      break;
    case "arrowleft":
    case "a":
      naveExplorer.girar("oeste");
      naveExplorer.mover();
      break;


    default:
      break;
  }
});

// Pulsar teclas para controlar la nave
// document.addEventListener("keydown", (event) => {
//     switch (event.key.toLowerCase()) {
//         case "e":
//             // Encender el motor
//             motor.classList.add("encender");
//             break;
//         case "q":
//             // Apagar el motor
//             motor.classList.remove("encender");
//             break;
//         case "arrowup":
//         case "w":
//             if (motor.classList.contains("encender")) {
//                 avanzar -= 10;
//                 estructura.style.transform = `translateY(${avanzar}px)`;
//                 // mover la nave con la flecha arriba o la tecla w solo si el motor está encendido
//             }
//             break;
//         case "arrowright":
//         case "d":
//             // girar la nave a la derecha con la flecha derecha o la tecla d
//             if (motor.classList.contains("encender")) {
//                 girarDer += 90;
//                 estructura.style.transform = `translateY(${avanzar}px) rotate(${girarDer}deg)`;
//             }
//             break;
//         case "arrowleft":
//         case "a":
//             // girar la nave a la izquierda con la flecha izquierda o la tecla a
//             if (motor.classList.contains("encender")) {
//                 girarIzq -= 90;
//                 estructura.style.transform = `translateY(${avanzar}px) rotate(${girarIzq}deg)`;
//             }
//             break;
//         default:
//             break;
//     }
// });

// Sino se activan los motores va cayendo la nave
// setInterval(() => {
//     if (!motor.classList.contains("encender")) {
//         posicionY += 5;
//         nave.style.transform = `translateY(${posicionY}px)`;
//     }
// }, 1000);
