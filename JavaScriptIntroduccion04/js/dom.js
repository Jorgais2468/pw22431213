let titulo = document.getElementById("titulo");
// let titulo = document.querySelector("h1"); o (".titulo")
console.log(titulo);
let principal = document.querySelector(".principal");
console.log(principal);
let lista = document.querySelectorAll("ul.lista > li");
console.log(lista);

titulo.innerText = "Estructurando el DOM";
titulo.innerHTML = "<em>Nuevo DOM</em>";

let foto = document.querySelector("img");
foto.setAttribute("src","img/logo_javascript2.png");
foto.classList.add("foto_cambio");

principal.style.background="#FFCC00";

let extra = document.querySelector(".extra");
document.body.removeChild(extra);

let nuevoArticle = document.createElement("article");
nuevoArticle.innerText = "NUEVO article";
nuevoArticle.style.color = "white";
nuevoArticle.style.background = "purple";
nuevoArticle.style.padding = "20px";
document.body.appendChild(nuevoArticle);

// Eventos
let boton = document.querySelector("button");
// boton.addEventListener("click", () => {
//     alert("Botón presionado")
// });
muestraMensaje = (mensaje) => {
    alert(mensaje);
}
boton.addEventListener("click", muestraMensaje.bind(null, "Hola"));