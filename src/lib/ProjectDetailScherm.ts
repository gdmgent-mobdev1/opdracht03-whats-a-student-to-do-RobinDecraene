import { MyApp } from "../app";
import { Scherm } from "./scherm";
import { FireBase } from "./Firebase";

export class ProjectDetailScherm extends Scherm {
    private arrowTodo : HTMLImageElement;
    // private hour;
    // private minutes;
    // private seconds;
    private timerBtn : HTMLButtonElement;
    // private timer;
    // private totaltime;
    // private timerId : HTMLElement;
    private name!: string;
    private nameProject : HTMLElement;

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
      this.nameProject = document.getElementById("nameProject") as HTMLElement;
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

  public open(room: string) {
    this.name = room;
    this.show();
}

public show() {
  this.nameProject.innerHTML = this.name;
  const test = document.createElement('h3');
  test.innerHTML = 'hallo';
}
}

// function countTimer(this: any) {
//   ++this.totaltime;
//   this.hour;
//   this.minutes;
//   this.seconds;
//   this.timerId.innerHTML = this.hour + ":" + this.minutes + ":" + this.seconds;
// }


