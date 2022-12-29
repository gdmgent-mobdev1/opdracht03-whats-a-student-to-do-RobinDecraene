// Import the functions you need from the SDKs you need
import {
  FirebaseApp,
  initializeApp
} from "firebase/app";
import {
  Auth,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  Unsubscribe,
  signOut
} from "firebase/auth";

import {
  getDatabase,
  ref,
  set,
  onValue,
  Database,
  DatabaseReference
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class FireBase {
  private FirebaseApp: FirebaseApp;
  private auth: Auth;
  private provider: GoogleAuthProvider;
  private database: Database;
  public user: User | undefined;

  private static service: FireBase | undefined;
  public static get(): FireBase {
    if (!this.service) this.service = new FireBase();
    return this.service;
  }

  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAGT_7hG9_R9bxknvLnB1SuDMAoIupsC24",
      authDomain: "opdracht03-whatsastudenttodo.firebaseapp.com",
      databaseURL: "https://opdracht03-whatsastudenttodo-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "opdracht03-whatsastudenttodo",
      storageBucket: "opdracht03-whatsastudenttodo.appspot.com",
      messagingSenderId: "461545902903",
      appId: "1:461545902903:web:bb4cc833813f5f84fcc0b2"
    };

    // Initialize Firebase
    const FirebaseApp = initializeApp(firebaseConfig);

  }

  public signupEmailPasswoord(email: string, password: string, naam: string, achternaam: string, cb: () => void) {
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      // Signed in 
      this.user = userCredential.user;
      updateProfile(this.user, {
          displayName: naam + ' ' + achternaam
      }).then(function() {
          // Update successful.
      }, function(error) {
          // An error happened.
      });  
      cb( );
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

public signinEmailPasswoord(email: string, password: string, cb: () => void) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      // Signed in 
      this.user = userCredential.user;
      cb( );
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

public signinPopup(cb: () => void) {
    signInWithPopup(this.auth, this.provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        this.user = result.user;
        cb( );
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

public signOut(cb: () => void){
    if(!this.user) { cb(); return; }
    signOut(this.auth).then(() => {
        // Sign-out successful.
        console.log('succes');
        cb();
        this.user = undefined;
      }).catch((error) => {
        // An error happened.
        console.log('error', error);
      });
}
 
}