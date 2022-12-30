import { MyApp } from "../app";

export class Scherm {

    protected scherm: HTMLElement;
    protected app: MyApp;

    constructor(id: string, app: MyApp) {
        this.app = app;
        this.scherm = document.getElementById(id) as HTMLElement;
    }

    public show(){
        this.scherm.classList.remove("verstopt");
    }

    public hide(){
        this.scherm.classList.add("verstopt");
    }

}