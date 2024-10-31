let elemento = document.querySelector("#elemento");
let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#listadinamica");

elemento.focus();

agregar.addEventListener("click", () => {
    if (elemento.value.trim() != ""){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerText = elemento.value;
        lista.appendChild(nuevoElemento);
        elemento.value = "";
    }
});

elemento.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        agregar.click();
    }
});

// Arrastrar y soltar (drag and drop)
let arrastra = document.querySelector("#arrastra");
let zonaSoltar = document.querySelector("#zonaSoltar");

arrastra.addEventListener("dragstart", function(e) {
    this.style.border="5px solid red"
});

zonaSoltar.addEventListener("dragover", function(e){
    // Olvide su función principal
    event.preventDefault();
});
zonaSoltar.addEventListener("drop", function(e){
    arrastra.style.border = "none";
    arrastra.style.display = "block";
    this.append(arrastra);
});