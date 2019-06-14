//Chequear si realmente es necesario declarar todas las variables de manera global.
var allTasks=[]
var btn, completed, containerButtons, item, listItem, listItemContent, newTask, toDo

//esta función medio inútil es para validar si imprime un textito cuando no hay tareas
var textWhenEmpty = function (list, textEmpty) {
    if (list.getElementsByTagName("li").length < 1) {
        var text = document.createElement("li")
        text.classList.add ("empty")
        text.innerText =textEmpty
        list.appendChild(text)
        }
}

var keyPress=function(event){
    event.code === 'Enter'?addTask():false
}

var toggleTask = function (btn) {
    allTasks[btn.id].isCompleted=!allTasks[btn.id].isCompleted
    printTask()
}

var deleteTask=function (btn) {
    allTasks.splice (btn.id,1)
    printTask()
}

var createButton=function(classBtn, index, btnFunction){
    btn=document.createElement('button')
    btn.classList.add(classBtn)
    btn.id=index
    btn.onclick=function(){btnFunction(this)}
    return btn
}

var createLi = function (task,index) {
    listItem = document.createElement('li')
    
    listItemContent=document.createElement('p')
    listItemContent.innerText=task.text
    
    containerButtons=document.createElement('div')
    containerButtons.classList.add('button')
    containerButtons.appendChild(createButton('toggle', index,toggleTask))
    containerButtons.appendChild(createButton('remove',index,deleteTask))

    listItem.appendChild(listItemContent)
    listItem.appendChild(containerButtons)

    return listItem
}

var printTask=function(){
    toDo=document.getElementById('toDo')
    toDo.innerHTML=''

    completed=document.getElementById('completed')
    completed.innerHTML=''
    
    allTasks.map(function(task, index){
        task.isCompleted? completed.appendChild (createLi(task,index)) : toDo.appendChild (createLi(task,index))
    })

    //este pedacito adicional imprime el textito cuando no hay tareas
    textWhenEmpty(toDo, '¡No hay tareas pendientes!')
    textWhenEmpty(completed, 'No hay tareas terminadas.')
}

var addTask=function(){
    item=document.getElementById('item')
    newTask=item.value
    
    if (newTask !== ''){
    item.value=''
    allTasks.unshift({text:newTask, isCompleted: false}) 
    printTask()
    }
}

//Eliminar comentarios antes de mergear para lograr un cógido más limpio y prolijo.