import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class HomeScherm extends Scherm {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;
  private accountImg : HTMLImageElement;
  private projectCard : HTMLElement;
  private add : HTMLImageElement;

  constructor(app: MyApp) {
    super("homeScherm", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
    this.accountImg = document.getElementById("accountImg") as HTMLImageElement;
    this.projectCard = document.getElementById("projectCard") as HTMLElement;
    this.add = document.getElementById("add") as HTMLImageElement;
  }

  public init(){

    this.add.onclick = () => {
      this.hide();
      this.app.newProject.show();
    }
    
    this.accountImg.onclick = () => {
      this.hide();
      this.app.accountScherm.show();
    }

    this.projectCard.onclick = () => {
      this.hide();
      this.app.projectDetailScherm.show();
     }
  }
}