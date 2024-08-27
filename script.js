const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const cajatexto = document.querySelector(".cajatexto");
const btnCopiar = document.querySelector(".btn-copiar");

botonEncriptar.addEventListener("click", () => procesarTexto(encriptarTexto));
botonDesencriptar.addEventListener("click", () => procesarTexto(desencriptarTexto));
btnCopiar.addEventListener("click", copiar);

function procesarTexto(proceso) {
    ocultarAdelante();
    const texto = cajatexto.value;
    resultado.textContent = proceso(texto);
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    return mensaje
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(mensaje) {
    return mensaje
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");
}

function copiar() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles");
}
