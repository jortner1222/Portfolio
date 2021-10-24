import ToDos  from './Todos.js';
//import { addToDo } from './Todos';
//on load grab the array and insert it into the page
const myToDos = new ToDos('taskList');
window.addEventListener('load', () => {
  myToDos.showToDoList(myToDos.getAllToDos());
});

window.onload=function(){
document.getElementById("addButton").onclick=function() {myToDos.addToDo()};
document.getElementById("all").onclick=function(){myToDos.filterList();}
document.getElementById("active").onclick=function(){myToDos.filterList();}
document.getElementById("completed").onclick=function(){myToDos.filterList();}
myToDos.filterList();
}