import { MyApp } from "../app";
import { FireBase } from "./firebase";
import { Scherm } from "./scherm";

export class LoginScherm extends Scherm {
    private loginChatBtn: HTMLElement;
    private accountSignup: HTMLElement;
    private googleLogin: HTMLElement;
    private emailLogin;
    private passwordLogin;

    constructor(app: MyApp) {
        super("login", app);
        this.loginChatBtn = document.getElementById("loginChatBtn") as HTMLElement;
        this.accountSignup = document.getElementById("accountSignup") as HTMLElement;
        this.googleLogin = document.getElementById("googleLogin") as HTMLElement;
        this.emailLogin = document.getElementById("emailLogin") as HTMLElement;
        this.passwordLogin = document.getElementById("passwordLogin") as HTMLElement;
    }

    public init(){
        this.emailLogin.value = "";
        this.passwordLogin.value = "";
        this.loginChatBtn.onclick = () => {
            const email = this.emailLogin.value;
            const pswd = this.passwordLogin.value;
            FireBase.get().signinEmailPasswoord(email, pswd, () => {
                this.hide();
                // this.app.chatScherm.show();
            });
        }

        this.accountSignup.onclick = () => {
            this.hide();
            this.app.siginScherm.show();
        }

        this.googleLogin.onclick = () => {
            FireBase.get().signinPopup(() => {

                this.hide();
                // this.app.chatScherm.show();
            });
        }  
    }
}