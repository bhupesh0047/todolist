let todoList2 =localStorage.getItem('todo');
let todoList=JSON.parse(todoList2) || [{todo: '', date:''}];


function addTodo(){  
    
    let inputElement=document.querySelector('#id1');
    let dateElement=document.querySelector('#id2');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({todo: todoItem, date: todoDate});
    inputElement.value='';
    dateElement.value='';
    inputItems();
    
}
function inputItems(){
    let item=document.querySelector('.container');
    
    let newHtml='';
    for(let i=1; i<todoList.length; i++){
        let todo=todoList[i].todo;
        let date=todoList[i].date;
        newHtml+=`<span>${todo}</span>
        <span>${date}</span>
        <button id="btn2" onclick="todoList.splice(${i},1);
        inputItems();" > Delete</button>`
        localStorage.setItem('todo',JSON.stringify(todoList)); 
    }
    
    item.innerHTML=newHtml;
}


