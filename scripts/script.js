var allTasks=[]
var item, task, toDo, completed, container, containerButtons

var keyPress=function(event){
    if(event.code === 'Enter'){
        addTask()
    }
}
var toggleTask=function(btn){
    allTasks[btn.id].isCompleted= !allTasks[btn.id].isCompleted
    printTask()
}

var deleteTask=function(btn){
    allTasks.splice(btn.id, 1)
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
var printTask=function(){
    toDo=document.getElementById('toDo')
    toDo.innerHTML=''
    completed=document.getElementById('completed')
    completed.innerHTML=''


    allTasks.map(function(e, i){
        container=document.createElement('li')
        container.innerText=e.text

        containerButtons=document.createElement('div')
        containerButtons.classList.add('button')
        container.appendChild(containerButtons)

        containerButtons.appendChild(createButton('remove', 'remove', i, deleteTask))
        containerButtons.appendChild(createButton('check', 'check', i, toggleTask))

        if(e.isCompleted){
            completed.appendChild(container)
        }else{
            toDo.appendChild(container)
        }
    })
}

var addTask=function(){
    item=document.getElementById('item')
    task=item.value
    
    if (task !== ''){
    item.value=''
    allTasks.unshift({text:task, isCompleted: false}) 
    printTask()
    }
}