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

    var buttonRemove=document.createElement('button')
    buttonRemove.classList.add('remove')
    containerButtons.appendChild(buttonRemove)

    var buttonCheck=document.createElement('button')
    buttonCheck.classList.add('check')
    containerButtons.appendChild(buttonCheck)

    var containerTask=document.getElementsByClassName('toDo')
    var completed=document.getElementById("completed")

    buttonCheck.onclick=function(){
        completed.appendChild(container)
    }

    buttonRemove.onclick=function(){
        var completed=document.getElementById("completed")
        toDo.removeChild(container)
    }

}
// hay que mejorar la funcion para que quede mas chica, como vimos en clase. dividirla en pequeñas funciones