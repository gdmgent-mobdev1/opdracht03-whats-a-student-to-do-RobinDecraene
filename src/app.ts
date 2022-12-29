/* eslint-disable no-new */
import { Card } from './Components';
import { Comment } from './Components';
import { EditableText } from './Components';
import { TodoList } from './Components';

import { FireBase } from "./lib/Firebase";
import { LoginScherm } from "./lib/LoginScherm";
import { SigninScherm } from "./lib/SigninScherm";
import { LogoutScherm } from "./lib/LogoutScherm";
import { root } from './lib';
// import localstorage from './Lib/localStorage';
// -------------main------------

export class MyApp {
  public card!: Card;
  public comment! : Comment;
  public editableText! : EditableText;
  public firebase! : FireBase;
  public loginScherm! : LoginScherm;
  public siginScherm! : SigninScherm;
  public logoutScherm! : LogoutScherm;

  constructor() {

  }
}

const addTodoListInput = document.getElementById('addTodoListInput') as HTMLInputElement;
const addTodoListButton = document.getElementById('addTodoListButton') as HTMLElement;

addTodoListButton.addEventListener('click', () => {
  if (addTodoListInput.value.trim() !== '') {
    new TodoList(document.getElementById('app') as HTMLElement, addTodoListInput.value);
    addTodoListInput.value = '';
  }
});