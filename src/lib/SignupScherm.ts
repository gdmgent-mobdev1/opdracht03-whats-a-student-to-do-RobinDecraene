import { MyApp } from "../app";
import { FireBase } from "./firebase";
import { Scherm } from "./scherm";

export class SignupScherm extends Scherm {
    private signupChatBtn: HTMLElement;
    private accoutnLogin: HTMLElement;
    private googleLogin: HTMLElement;
    private nameSignup;
    private lastNameSignup;
    private emailSignup;
    private passwordsignup;

    constructor(app: MyApp) {
        super("signup", app);
        this.signupChatBtn = document.getElementById("signupChatBtn") as HTMLElement;
        this.accoutnLogin = document.getElementById("accountLogin") as HTMLElement;
        this.googleLogin = document.getElementById('googleSignup') as HTMLElement;
        this.nameSignup = document.getElementById('nameSignup') as HTMLInputElement;
        this.lastNameSignup = document.getElementById('lastNameSignup') as HTMLInputElement;
        this.emailSignup = document.getElementById('emailSignup') as HTMLInputElement;
        this.passwordsignup = document.getElementById('passwordsignup') as HTMLInputElement;
    }   

    public init(){
        
        this.signupChatBtn.onclick = () => {
            const email = this.emailSignup.value;
            const pswd = this.passwordsignup.value;
            const naam = this.nameSignup.value;
            const achternaam = this.lastNameSignup.value;
            FireBase.get().signupEmailPasswoord(email, pswd, naam, achternaam, () => {
                this.hide();
                // this.app.chatScherm.show();
                this.emailSignup.innerHTML = '';
            });
        }

        this.accoutnLogin.onclick = () => {
            this.hide();
            this.app.loginScherm.show();
        }

        this.googleLogin.onclick = () => {
            FireBase.get().signinPopup(() => {

                this.hide();
                // this.app.chatScherm.show();
            });
        }        
    }
}