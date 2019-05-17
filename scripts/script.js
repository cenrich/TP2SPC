// funcion que toma lo que se ingresa en el input, lo guarda y lo imprime en pantalla por debajo como tarea pendiente

var item, task, toDo, container
var addTask=function(){
    item=document.getElementById('item')
    task=item.value

    container=document.createElement('li')
    container.innerText=task

    toDo=document.getElementById('toDo')
    toDo.appendChild(container)

    var containerButtons=document.createElement('div')
    containerButtons.classList.add('button')
    container.appendChild(containerButtons)

    createButtons('remove')
    createButtons('check')
    containerButtons.appendChild(createButtons('remove'))
    containerButtons.appendChild(createButtons('check'))

    var containerTask=document.getElementsByClassName('toDo')
    var completed=document.getElementById("completed")
}
// hay que mejorar la funcion para que quede mas chica, como vimos en clase. dividirla en pequeñas funciones

var createButtons=function(classBtn, name){
    var btn=document.createElement('button')
    btn.classList.add(classBtn)
    btn.onclick=function(){
        //como crear la funcion onclick
    }
    return btn
}
