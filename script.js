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
    // creo un div para contener los dos botones, estos tambien los creo. a los tres elementos les doy una clase asi se le pueden agregar los estilos. despues los agrego como hijos del li
    var containerButtons=document.createElement('div')
    containerButtons.classList.add('button')
    container.appendChild(containerButtons)

    var buttonRemove=document.createElement('button')
    buttonRemove.classList.add('remove')
    containerButtons.appendChild(buttonRemove)

    var buttonCheck=document.createElement('button')
    buttonCheck.classList.add('check')
    containerButtons.appendChild(buttonCheck)
    //crea el evento onclick
    buttonCheck.onclick=function(){
        //tiene que hacer que la tarea ya no figure en el ul toDo sino que en el completed
    }
    
}
