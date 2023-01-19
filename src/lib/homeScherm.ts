import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class HomeScherm extends Scherm {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;
  private accountImg : HTMLImageElement;

  constructor(app: MyApp) {
    super("homeScherm", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
    this.accountImg = document.getElementById("accountImg") as HTMLImageElement;
  }

  public init(){
    this.accountImg.onclick = () => {
      this.hide();
      this.app.accountScherm.show();
    }

    
  }
}