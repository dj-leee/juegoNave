// VARIABLES SIMPLES Y CONSTANTES
const nave = document.getElementById("nave")
const estructura = document.getElementById("estructura")
const motor = document.getElementById("motor")
const motorEncendido = motor.classList.contains("encender")

let posY = 0



document.addEventListener("keydown", (event) => {
switch (event.key.toLowerCase()) {
    case "e":
        motor.classList.add("encender")
        break;

    case "q":
        motor.classList.remove("encender")
        break;
        m
    case "arrowup":
        case "w":
        if (motor.classList.contains("encender")) {
        posY -= 10
        estructura.style.transform = `translateY(${posY}px)`
        }
        break;

    case "arrowdown":
        case "s":
        if (motor.classList.contains("encender")) {
        posY += 10
        estructura.style.transform = `translateY(${posY}px)`
        }
        break;

    default:
        console.log("Tecla no reconocida");
        break;
}
}) 


