import ToDos from './Todos.js';
//on load grab the array and insert it into the page
const myToDos = new ToDos('taskList');
window.addEventListener('load', () => {
  myToDos.showToDoList();
});

