import ToDos from './Todos.js';
//import { addToDo } from './Todos';
//on load grab the array and insert it into the page
const myToDos = new ToDos('taskList');
window.addEventListener('load', () => {
  myToDos.showToDoList();
});

window.onload=function(){
document.getElementById("addButton").onclick=function() {myToDos.addToDo()};
}