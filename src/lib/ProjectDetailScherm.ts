import { MyApp } from "../app";
import { Scherm } from "./scherm";
import { FireBase } from "./Firebase";
import { TodoList } from "../Components";

export class ProjectDetailScherm extends Scherm {
    private arrowTodo : HTMLImageElement;
    // private hour;
    // private minutes;
    // private seconds;
    private timerBtn : HTMLButtonElement;
    // private timer;
    // private totaltime;
    // private timerId : HTMLElement;
    public name!: string;
    private lists: any[];
    private listId : HTMLElement

    constructor(app: MyApp){
      super("projectDetailsScherm", app);
      this.arrowTodo = document.getElementById("arrowTodo") as HTMLImageElement;
      this.timerBtn = document.getElementById("timerBtn") as HTMLButtonElement;
      // this.timer = setInterval(countTimer, 1000);
      // this.totaltime = 0;
      // this.hour = Math.floor(this.totaltime /3600);
      // this.minutes = Math.floor((this.totaltime - this.hour*3600)/60);
      // this.seconds = this.totaltime - (this.hour*3600 + this.minutes*60);
      // this.timerId = document.getElementById("timerId") as HTMLElement;
      
      this.listId = document.getElementById("list") as HTMLElement;
      this.lists = [
        new TodoList(this.listId, 'To do', this.app.firebase, this),
        new TodoList(this.listId, 'Started', this.app.firebase, this),
        new TodoList(this.listId, 'Done', this.app.firebase, this),
        ]
    }

  public init(){
    this.arrowTodo.onclick = () => {
      this.hide();
      this.app.homeScherm.show();
    }

    // this.timerBtn.onclick = () => {
    //   countTimer();
    // }
  }

  public open(data: any) {
    this.name = data.name;

    // const cards = this.app.firebase.getCards(data.name);
    this.show();
}

public show() {
  const nameProject = document.getElementById("nameProject") as HTMLElement;
  nameProject.innerHTML = this.name;
  super.show();
}
}

// function countTimer(this: any) {
//   ++this.totaltime;
//   this.hour;
//   this.minutes;
//   this.seconds;
//   this.timerId.innerHTML = this.hour + ":" + this.minutes + ":" + this.seconds;
// }


