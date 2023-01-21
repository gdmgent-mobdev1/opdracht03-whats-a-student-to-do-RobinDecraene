import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class ProjectDetailScherm extends Scherm {
    private arrowTodo : HTMLImageElement;
    private hour;
    private minutes;
    private seconds;
    private timerBtn : HTMLButtonElement;
    private timer;
    private totaltime;
    private timerId : HTMLElement;

    constructor(app: MyApp){
      super("projectDetailsScherm", app);
      this.arrowTodo = document.getElementById("arrowTodo") as HTMLImageElement;
      this.timerBtn = document.getElementById("timerBtn") as HTMLButtonElement;
      this.timer = setInterval(countTimer, 1000);
      this.totaltime = 0;
      this.hour = Math.floor(this.totaltime /3600);
      this.minutes = Math.floor((this.totaltime - this.hour*3600)/60);
      this.seconds = this.totaltime - (this.hour*3600 + this.minutes*60);
      this.timerId = document.getElementById("timerId") as HTMLElement;
   }

  public init(){
    this.arrowTodo.onclick = () => {
      this.hide();
      this.app.homeScherm.show();
    }

    this.timerBtn.onclick = () => {
      countTimer();
    }
  }
}

function countTimer(this: any): void {
  ++this.totaltime;
  this.hour;
  this.minutes;
  this.seconds;
  this.timerId.innerHTML = this.hour + ":" + this.minutes + ":" + this.seconds;
}


