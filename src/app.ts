/* eslint-disable no-new */
import { Card } from './Components';
import { Comment } from './Components';
import { EditableText } from './Components';
import { TodoList } from './Components';

import { FireBase } from "./lib/Firebase";
import { LoginSignupScherm } from "./lib/LoginSignupScherm";
import { LoginScherm } from "./lib/LoginScherm";
import { SignupScherm } from "./lib/SignupScherm";
import { LogoutScherm } from "./lib/LogoutScherm";
//import { root } from './lib';
// import localstorage from './Lib/localStorage';
// -------------main------------

export class MyApp {
  public card!: Card;
  public comment! : Comment;
  public editableText! : EditableText;
  public firebase : FireBase;
  public loginSignupScherm : LoginSignupScherm;
  public loginScherm : LoginScherm;
  public signupScherm : SignupScherm;
  public logoutScherm : LogoutScherm;

  constructor() {
    // this.card = new Card(this);
    // this.comment = new Comment(this);
    // this.editableText = new EditableText(this);
    this.firebase = new FireBase();
    this.loginScherm = new LoginScherm(this);
    this.signupScherm = new SignupScherm(this);
    this.logoutScherm = new LogoutScherm();
    this.loginSignupScherm = new LoginSignupScherm(this);

    this.loginSignupScherm.init();
    this.loginScherm.init();
    this.signupScherm.init();
    // this.logoutScherm.init();
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