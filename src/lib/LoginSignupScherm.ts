import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class LoginSignupScherm extends Scherm {
    private login: HTMLElement;
    private signup: HTMLElement;

    constructor(app: MyApp) {
        super("login-signup", app);
        this.login = document.getElementById("loginBtn") as HTMLElement;
        this.signup = document.getElementById("signupBtn") as HTMLElement;
    }

    public init(){
        this.login.onclick = () => {
            this.hide();
            this.app.loginScherm.show();
        }

        
        this.signup.onclick = () => {
            this.hide();
            this.app.siginScherm.show();
        }
    }
    
}