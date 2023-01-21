import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class HomeScherm extends Scherm {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;
  private accountImg : HTMLImageElement;
  // private projectCard : HTMLElement;
  private add : HTMLImageElement;
  private projects : HTMLElement;
  public projectRooms = [
    'Project mob dev', 'Taak UX', 'Powerpoint PPD', 'Taak web dev'
  ]

  constructor(app: MyApp) {
    super("homeScherm", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
    this.accountImg = document.getElementById("accountImg") as HTMLImageElement;
    // this.projectCard = document.getElementById("projectCard") as HTMLElement;
    this.add = document.getElementById("add") as HTMLImageElement;
    this.projects = document.getElementById("projects") as HTMLElement;
  }

  private createProject(name: string) : HTMLElement {
    const projectRoom = document.createElement('div');
    projectRoom.setAttribute('id', 'projectCard');
    const img = document.createElement('img');
    img.src = "./src/img/project.jpg";
    const div = document.createElement('div');
    const title = document.createElement('h3');
    title.innerHTML = name;

    div.append(title);
    projectRoom.append(img, div);
    projectRoom.onclick = () => {
      this.hide();
      this.app.projectDetailScherm.open(name);
    }
    return projectRoom;
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

    this.projectRooms.forEach(room => {
      const element = this.createProject(room);
      this.projects.append(element);
    })
  }
}