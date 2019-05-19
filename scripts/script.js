var allTasks=[]
var item, task, toDo, completed

var keyPress=function(event){
    if(event.code === 'Enter'){
        addTask()
        }
}

var printTask=function(){
    toDo=document.getElementById('toDo')
    toDo.innerHTML=''

    allTasks.map(function(e){
        var container=document.createElement('li')
        container.innerText=e.text
    
        toDo.appendChild(container)
            
        var containerButtons=document.createElement('div')
        containerButtons.classList.add('button')
        container.appendChild(containerButtons)

        createButton('remove')
        createButton('check')
        containerButtons.appendChild(createButton('remove'))
        containerButtons.appendChild(createButton('check'))
        completed=document.getElementById('completed')
    })
}

var addTask=function(){
    item=document.getElementById('item')
    task=item.value
    
    if (task !== ''){
    item.value=''
    allTasks.unshift({text:task, toDo: true}) 
    printTask()
    }
}

var createButton=function(classBtn, name){
    var btn=document.createElement('button')
    btn.classList.add(classBtn)
    btn.onclick=function(){
        //como crear la funcion onclick
    }
    return btn
}