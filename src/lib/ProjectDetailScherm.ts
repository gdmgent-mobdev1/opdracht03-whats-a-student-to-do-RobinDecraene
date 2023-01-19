import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class ProjectDetailScherm extends Scherm {
    private arrowTodo : HTMLImageElement;
    private timer : HTMLElement;

    constructor(app: MyApp){
      super("projectDetailsScherm", app);
      this.arrowTodo = document.getElementById("arrowTodo") as HTMLImageElement;
      this.timer =  document.getElementById("timer") as HTMLElement;
   }

  public init(){
    this.arrowTodo.onclick = () => {
      this.hide();
      this.app.homeScherm.show();
    }
  }
}