const nave = document.getElementById("nave")
const btEncender = document.getElementById("teclaE")
const btApagar = document.getElementById("teclaQ")

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
        nave.classList.add("encender")
    } else if (event.key === "q" || event.key === "Q") {
        nave.classList.remove("encender")
    }
    
}) // <- Faltaba cerrar aquí

btEncender.addEventListener("click", () => {
    nave.classList.add("encender")
})

btApagar.addEventListener("click", () => {
    nave.classList.remove("encender")
})