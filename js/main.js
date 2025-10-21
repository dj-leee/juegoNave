const nave = document.getElementById("nave")
const btEncender = document.getElementById("teclaE")
const btApagar = document.getElementById("teclaQ")

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
        nave.classList.add("encender")
    }

    }