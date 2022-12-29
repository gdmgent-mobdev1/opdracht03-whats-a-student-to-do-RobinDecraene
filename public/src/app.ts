/* eslint-disable no-new */
import { TodoList } from './Components';
import { root } from './Lib';
// import localstorage from './Lib/localStorage';
// -------------main------------
const addTodoListInput = document.getElementById('addTodoListInput') as HTMLInputElement;
const addTodoListButton = document.getElementById('addTodoListButton') as HTMLElement;

addTodoListButton.addEventListener('click', () => {
  if (addTodoListInput.value.trim() !== '') {
    new TodoList(document.getElementById('app') as HTMLElement, addTodoListInput.value);
    addTodoListInput.value = '';
  }
});