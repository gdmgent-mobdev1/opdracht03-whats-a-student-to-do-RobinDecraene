import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class HomeScherm extends Scherm {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;

  constructor(app: MyApp) {
    super("homeScherm", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
  }

  public init(){
    
  }
}