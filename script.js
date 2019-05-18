var item, task, toDo, container

var keyPress=function(){
    if(event.code === 'Enter'){
        addTask()
        }
}

// lo del enter no me estaria funcionando

var printTask=function(){
    toDo=document.getElementById('toDo')
    toDo.innerHTML=''

    container=document.createElement('li')
    container.innerText=task

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
var addTask=function(){
    item=document.getElementById('item')
    task=item.value

}

var createButtons=function(classBtn, name){
    var btn=document.createElement('button')
    btn.classList.add(classBtn)
    btn.onclick=function(){
        //crear la funcion para que cambie de lista
    }
    return btn
}