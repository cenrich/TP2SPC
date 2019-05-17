//una función que escriba un texto en pantalla cuando la lista está vacía (no sé si tienen que ser 2... discutamos) - esta es onload
var listas = [
    {id:"toDo", textEmpty:"¡No hay tareas pendientes!"},
    {id:"completed", textEmpty:"Todavía no completaste ninguna tarea."}
]

var textoVacio = function () {
    listas.map(function(a){
        var auxiliar =document.getElementById(a.id)
        if ( auxiliar.getElementsByTagName("li").length < 1) {
            var textoPantalla = document.createElement("li")
            textoPantalla.classList.add ("vacio")
            textoPantalla.innerText = a.textEmpty
            auxiliar.appendChild(textoPantalla)
        }})}    


//una función que tome lo que viene del input, le dé muchas propiedades, lo pegue a un div que contenga botones lindos y lo guarde como li de todo - esta es con enter y con onclick

//una función que cambie de quién depende ese li cuando apreto el check; también debería cambiarle la clase para que cambie el estilo - esta es onclick

//una función que borre el elemento de la pantalla cuando apreto el tacho - esta es onclick
