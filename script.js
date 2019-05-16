// funcion que toma lo que se ingresa en el input, lo guarda y lo imprime en pantalla por debajo como tarea pendiente
var item, task, toDo
var addTask=function(){
    // busca en el dom el id del input asi queda guardardo en una variable
    //el value del input (la tarea que ingresa la persona) la guarda en una variable
    item=document.getElementById('item')
    task=item.value
    // crea un elemento li y le ingresa el texto de la tarea que se ingreso
    var container=document.createElement('li')
    container.innerText=task
    //busca en el dom el ul que tiene como id 'toDo' y le agrega un hijo: el li que creamos antes
    toDo=document.getElementById('toDo')
    toDo.appendChild(container)
}
/*
var addButtons=function(){
    var divButton=document.createElement('div')
    divButton.classList.add('button')
    var buttonRemove=document.createElement('button')
    var buttonCheck=document.createElement('button')
    buttonRemove.classList.add('remove')
    buttonCheck.classList.add('check')
}*/

/* al li habria que agregarle un div como hijo y que este tenga dos botones. uno para remover y otro para chequear. estos botones tienen que tener eventos onclick(). cuando la persona haga click en el boton de chequeo, el li debera agregarse en el ul con la clase completed. si ya estaba en este ultimo, vuelve al ul inicial que es el que tiene la clase toDo. si la persona hace click en el boton de remover, se elimina la tarea.*/