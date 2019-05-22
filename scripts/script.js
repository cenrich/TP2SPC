var allTasks=[]
var completed, containerButtons, item, listItem, newTask, toDo

var textWhenEmpty = function () {
    console.log("besitos")
}    

var keyPress=function(event){
    if(event.code === 'Enter'){
        addTask()
    }
}
var toggleTask=function(btn){
    allTasks[btn.id].isCompleted= !allTasks[btn.id].isCompleted
    printTask()
}

var toggleTask = function (btn) {
    allTasks[btn.id].isCompleted=!allTasks[btn.id].isCompleted
    printTask()
}

var deleteTask=function (btn) {
    allTasks.splice (btn.id,1)
    printTask()
}

var createButton=function(classBtn, name, index, btnFunction){
    btn=document.createElement('button')
    btn.classList.add(classBtn)
    btn.innerText=name
    btn.id=index
    btn.onclick=function(){btnFunction(this)}
    return btn
}

var createLi = function (task,index) {
    listItem = document.createElement('li')
    listItem.innerText=task.text

    containerButtons=document.createElement('div')
    containerButtons.classList.add('button')
    containerButtons.appendChild(createButton('toggle','toggle', index,toggleTask))
    containerButtons.appendChild(createButton('remove','remove',index,deleteTask))
    
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