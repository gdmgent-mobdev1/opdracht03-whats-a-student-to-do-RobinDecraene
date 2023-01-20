import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class NewProject extends Scherm{
  private arrowNewProject : HTMLImageElement;
  private btnNewProject : HTMLButtonElement;

  constructor(app: MyApp){
    super("newProject", app);
    this.arrowNewProject = document.getElementById("arrowNewProject") as HTMLImageElement;
    this.btnNewProject = document.getElementById("btnNewProject") as HTMLButtonElement;
 }

public init(){
  this.arrowNewProject.onclick = () => {
    this.hide();
    this.app.homeScherm.show();
  }

  this.btnNewProject.onclick = () => {
    this.hide();
    this.app.homeScherm.show();
  }
}

}