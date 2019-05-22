var allTasks=[]
var task = {}
var item, container, containerButtons, listItem

var keyPress=function(event){
    if(event.code === 'Enter'){
        addTask()
        }
}

var toggleTask = function (btn) {
    allTasks[btn.id].isCompleted=!allTasks[btn.id].isCompleted
    printTask()
}

var deleteTask=function (btn) {
    allTasks.splice (btn.id,1)
    printTask()
}

var createButton=function(btnFunction,btnId){
    var btn=document.createElement('button')
    btn.id=btnId
    btn.onclick=function(){btnFunction(this)}
    return btn
}

var createLi = function (task,index) {
    listItem = document.createElement('li')
    listItem.innerText=task.text //repasar esto

    containerButtons=document.createElement('div')
    containerButtons.classList.add('button')
    containerButtons.appendChild(createButton(toggleTask,index))
    containerButtons.appendChild(createButton(deleteTask,index))
    
    listItem.appendChild(containerButtons)
    return listItem
}

var printTask=function(){
    var toDo=document.getElementById('toDo')
    toDo.innerHTML=''

    var completed=document.getElementById('completed')
    completed.innerHTML=''
    
    allTasks.map(function(task, index){
        if (task.isCompleted==false) {
        toDo.appendChild (createLi(task,index))} else {
        completed.appendChild (createLi(task,index))
        }
    })
}

var addTask=function(){
    item=document.getElementById('item')
    var newTask=item.value
    
    if (newTask !== ''){
    item.value=''
    allTasks.unshift({text:newTask, isCompleted: false}) 
    printTask()
    }
}



