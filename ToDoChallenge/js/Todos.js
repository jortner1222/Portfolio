import {readFromLS, writeToLS} from './ls.js';
let toDoList=readFromLS();
//const key= "todo"; 

export default class ToDos {
  //constructor
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    //let task1= {task: "make bed", completed: false};
    //writeToLS(task1.task, task1);
    toDoList= readFromLS();
    
    this.showToDoList(toDoList); 
   
  }
  
  //gets my toDo list array
  getAllToDos() {
    return toDoList;
  
  }
  /*
  // get just one task.
  getTaskByName(taskName) {
      console.log(taskName);
      console.log(toDoList.name);
    return this.getAllToDos().find((taskName) => toDoList.name === taskName);
  }

  */
  removeTask(task) {

    //const index = toDoList.indexOf(name);
    //toDoList.splice(index, 1);
    console.log ("removed "+ task.name);
    task.showToDoList(toDoList); 
  }
 
  //show a list of tasks in the parentElement
  showToDoList(list) {
    
    while(this.parentElement.firstChild)
      this.parentElement.removeChild(this.parentElement.firstChild);
    renderToDoList(this.parentElement, list);
    this.updateTotal(list);
    
  }
  addToDo() {
    document.getElementById("addButton").onclick=this; 
    let newTask= document.getElementById("newItem").value;
    if(newTask!=undefined){ 
    this.saveTodo(newTask);}
    this.showToDoList(toDoList); 
    
  }
  saveTodo(task){
    console.log("here")
    var newTask = {task: task, completed : false}
    console.log(newTask.task); 
    writeToLS(task, newTask); 
    toDoList = readFromLS();
    this.showToDoList(toDoList); 
  }
  filterList(){
   let newList= this.getAllToDos();  
   let all = document.getElementById("all");
   let complete = document.getElementById("completed");
   let active =  document.getElementById("active");
   console.log(newList); 
   if(complete.checked){
     newList=newList.filter(this.checkDone); 
   }
   if(active.checked){
     newList=newList.filter(this.checkNotDone);
   }
  this.showToDoList(newList);
  this.updateTotal(newList);
  }
  checkDone(item){
   return item.completed; 
  }
  checkNotDone(item){
    return item.completed==false; 
   }
  updateTotal(newList){
    let length= "Total Items: " + newList.length; 
    document.getElementById("total").innerText= length;
  }
  
  
} 

// methods responsible for building HTML.  

/*
function getTodos(key){
toDoList.push(readFromLS(key)); 
return toDoList; 
}
*/
//add a task.


function  renderToDoList(parent, tasks) {
  if (tasks != undefined){
    console.log ("the tasks are " + tasks)
    tasks.forEach(task => {
      //let todo=JSON.parse(task); 
      parent.appendChild(renderOneTask(task));
      
    });
  }
}

 function  renderOneTask(task) {
   //make list item
    console.log ("task is: " + task.completed)
    const item = document.createElement('li');
    if (task.completed)
    item.className="done";
    else
    item.className="notDone";
    var text= document.createTextNode(task.task); 
   
    //add checkbox
    const checkbox= document.createElement('input');
    checkbox.type ="checkbox";
    checkbox.checked= task.completed; 
    checkbox.name= task.task; 
    checkbox.addEventListener('change', function(){
      if (this.checked)
      {
          task.completed=true;;
          console.log(task.task + " completed. ")
          writeToLS(task.task, task);  
      }
      else{
          task.completed=false; 
          console.log(task.task + " not completed. ")
          writeToLS(task.task, task);
      }
    })
    item.appendChild(checkbox);
    item.appendChild(text); 
    //add list name 
    //item.innerHTML = ` ${task.name} `;
    //console.log(task.task);
    //made close button
    
    const button= document.createElement("BUTTON");
    var text= document.createTextNode("Remove")
    button.appendChild(text);  
    button.id= "close"; 
    button.onclick= function() {removeTask(task); location.reload();};
    item.appendChild(button);
  
    return item;}
   
  function removeTask(task){
    localStorage.removeItem(task.task);
    console.log("task removed"); 
  }
 
 
