import { MyApp } from "../app";
import { Scherm } from "./scherm";

export class LoginSignupScherm extends Scherm {
    private login: HTMLButtonElement;
    private signup: HTMLButtonElement;

    constructor(app: MyApp) {
        super("login-signup", app);
        this.login = document.getElementById("loginBtn") as HTMLButtonElement;
        this.signup = document.getElementById("signupBtn") as HTMLButtonElement;
    }

    public init(){
        this.login.onclick = () => {
            this.hide();
            this.app.loginScherm.show();
        }

        
        this.signup.onclick = () => {
            this.hide();
            this.app.signupScherm.show();
        }
    }
    
}