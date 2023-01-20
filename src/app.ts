/* eslint-disable no-new */
import { Card } from './Components';
import { Comment } from './Components';
import { EditableText } from './Components';
import { TodoList } from './Components';

import { FireBase } from "./lib/Firebase";
import { LoginSignupScherm } from "./lib/LoginSignupScherm";
import { LoginScherm } from "./lib/LoginScherm";
import { SignupScherm } from "./lib/SignupScherm";
import { AccountScherm } from './lib/accountScherm'; 
import { HomeScherm } from './lib/homeScherm';
import { ProjectDetailScherm } from './lib/projectDetailScherm';
import { NewProject } from './lib/newProject';
// import { root } from './lib';
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
  public accountScherm : AccountScherm;
  public homeScherm : HomeScherm;
  public projectDetailScherm : ProjectDetailScherm;
  public newProject : NewProject;

  constructor() {
    // this.card = new Card(this);
    // this.comment = new Comment(this);
    // this.editableText = new EditableText(this);
    this.firebase = new FireBase();
    this.loginScherm = new LoginScherm(this);
    this.signupScherm = new SignupScherm(this);
    this.accountScherm = new AccountScherm(this);
    this.loginSignupScherm = new LoginSignupScherm(this);
    this.homeScherm = new HomeScherm(this);
    this.projectDetailScherm = new ProjectDetailScherm(this);
    this.newProject = new NewProject(this);

    this.loginSignupScherm.init();
    this.loginScherm.init();
    this.signupScherm.init();
    this.accountScherm.init();
    this.homeScherm.init();
    this.projectDetailScherm.init();
    this.newProject.init();
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

const app = () =>
{
  new MyApp();
  
};

app();