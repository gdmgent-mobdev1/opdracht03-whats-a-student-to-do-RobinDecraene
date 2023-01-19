import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class HomeScherm extends Scherm {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;
  private accountImg : HTMLImageElement;
  private projectCard : HTMLElement;

  constructor(app: MyApp) {
    super("homeScherm", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
    this.accountImg = document.getElementById("accountImg") as HTMLImageElement;
    this.projectCard = document.getElementById("projectCard") as HTMLElement;
  }

  public init(){
    
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