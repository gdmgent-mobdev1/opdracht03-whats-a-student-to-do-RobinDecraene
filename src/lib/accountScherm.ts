import { MyApp } from "../app";
import { FireBase } from "./firebase";
import { Scherm } from "./scherm";

export class AccountScherm extends Scherm{
    private arrow: HTMLElement;
    private logoutBtn: HTMLButtonElement;

    constructor(app: MyApp) {
        super("account", app);
        this.arrow = document.getElementById("arrowAccount") as HTMLElement;
        this.logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;
    }

    public init(){
        
        this.arrow.onclick = () => {
            this.hide();
            this.app.homeScherm.show();
        }

        this.logoutBtn.onclick = () => {
            FireBase.get().signOut(() => {
            this.hide();
            this.app.loginSignupScherm.show();
            });
        }
    }

    public show(){
        const user = FireBase.get().user?.displayName;
        const us = document.getElementById('logged-in-user-name');
        if(us) us.innerText= user || '';
        super.show();
    }
}