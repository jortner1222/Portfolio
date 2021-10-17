const toDoList = [
  {
    name: "do dishes",
    completed: false,
  },
  {
    name: "mop floor",
    completed: true,
  },
  {
    name: "do homework",
    completed: false,
  },
];

export default class ToDos {
  //constructor
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
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

  //add a task.
  addTask(name) {
    toDoList.push(name, false);
  }

  //remove a task
  removeTask(name) {
    const index = toDoList.name.indexOf(name);
    toDoList.splice(index, 1);
  }

  //show a list of tasks in the parentElement
  showToDoList() {
    this.parentElement.innerHTML = "";
    renderToDoList(this.parentElement, this.getAllToDos());
   
  }
  // show one task in the parentElement
  //showOneToDo(name) {
    //const task = this.getTaskByName(name);
    //this.parentElement.innerHTML = "";
    //this.parentElement.appendChild(renderOneTask(task));
  //}
  changeCheck(name){
    const task= this.getTaskByName(name);
    if (task.completed)
    {
        task.completed=false;
    }
    else{
        task.completed=true; 
    }

  }
}

// methods responsible for building HTML.  
function renderToDoList(parent, tasks) {
    tasks.forEach(task => {
      parent.appendChild(renderOneTask(task));
    });
  }
  function renderOneTask(task) {
    console.log(task.name);
    //make a list item
    //<!-- <input type= 'checkbox" id= ${task.name} value= ${task.name} checked= ${task.checked} onclick="changeCheck(task.name)">
    const item = document.createElement('li');
    item.innerHTML = ` 
     ${task.name} <br> 
    `;
    console.log("here")
    return item;
  }

  