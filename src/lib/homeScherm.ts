import { MyApp } from "../app";
import { Scherm } from "./scherm";

const projects = [
  { name: 'Project mob dev', description: 'Examen taak' },
  { name: 'Taak UX', description: 'Eindtaak' },
  { name: 'Powerpoint PPD', description: 'Laatste powerpoint' },
  { name: 'Taak web dev', description: 'Eindtaak' }
]

export class HomeScherm extends Scherm {
  private addTodoListInput : HTMLInputElement;
  private addTodoListButton : HTMLButtonElement;
  private accountImg : HTMLImageElement;
  // private projectCard : HTMLElement;
  private add : HTMLImageElement;
  private projects : HTMLElement;

  constructor(app: MyApp) {
    super("homeScherm", app);
    this.addTodoListInput = document.getElementById("addTodoListInput") as HTMLInputElement;
    this.addTodoListButton = document.getElementById("addTodoListButton") as HTMLButtonElement;
    this.accountImg = document.getElementById("accountImg") as HTMLImageElement;
    // this.projectCard = document.getElementById("projectCard") as HTMLElement;
    this.add = document.getElementById("add") as HTMLImageElement;
    this.projects = document.getElementById("projects") as HTMLElement;
  }

  private createProject(data: any) : HTMLElement {
    const projectRoom = document.createElement('div');
    projectRoom.setAttribute('id', 'projectCard');
    const img = document.createElement('img');
    img.src = "./src/img/project.jpg";
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const beschrijving = document.createElement('p');
    title.innerHTML = data.name;
    beschrijving.innerHTML = data.description;

    div.append(title, beschrijving);
    projectRoom.append(img, div);
    projectRoom.onclick = () => {
      this.hide();
      this.app.projectDetailScherm.open(data);
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

    projects.forEach(project => {
      const element = this.createProject(project);
      this.projects.append(element);
    })
  }
}