import {readFromLS, writeToLS} from './ls.js';
let toDoList=[]
//const key= "todo"; 

export default class ToDos {
  //constructor
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    let task1= {task: "make bed", completed: "false"};
    localStorage.setItem(task1.task,JSON.stringify(task1));

    toDoList.push(readFromLS(task1.task));
    //this.showToDoList(); 
   
  }
  // gets my toDo list array
  getAllToDos() {
    
    return toDoList;
  }
  // get just one task.
  getTaskByName(taskName) {
      console.log(taskName);
      console.log(toDoList.name);
    return this.getAllToDos().find((taskName) => toDoList.name === taskName);
  }

  
  removeTask(task) {

    //const index = toDoList.indexOf(name);
    //toDoList.splice(index, 1);
    console.log ("removed "+ task.name);
    task.showToDoList(); 
  }
 
  //show a list of tasks in the parentElement
  showToDoList() {
    while(this.parentElement.firstChild)
      this.parentElement.removeChild(this.parentElement.firstChild);
    renderToDoList(this.parentElement, toDoList);
  }
  addToDo() {
    document.getElementById("addButton").onclick=this; 
    let newTask= document.getElementById("newItem").value;
    if(newTask!=undefined){ 
    this.saveTodo(newTask);}
    this.showToDoList(); 
    
  }
  saveTodo(task){
    console.log("here")
    var newTask = {task: task, completed : false}
    console.log(newTask.task); 
    toDoList.push(newTask); 
    writeToLS(newTask.task, toDoList);} 

  
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
    tasks.forEach(task => {
      if (task.task!="" && task.task != undefined)
      parent.appendChild(renderOneTask(task));
      
    });}else{
    var text= document.createTextNode("Empty List");
    parent.appendChild(text); }
  }

 function  renderOneTask(task) {
   //make list item

    const item = document.createElement('li');
    var text= document.createTextNode(task.task); 
    //add checkbox
    const checkbox= document.createElement('input');
    checkbox.type ="checkbox";
    checkbox.value= task.completed; 
    checkbox.name= task.task; 
    checkbox.addEventListener('change', function(){
      if (this.checked)
      {
          task.completed=true;;
          console.log(task.task + " completed. ")
      }
      else{
          task.completed=false; 
          console.log(task.task + " not completed. ")
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
    button.onclick= function() {removeTask(task)};
    item.appendChild(button);
  
    return item;}
   
  function removeTask(task){
    console.log("task removed");
  }
 
  

    
