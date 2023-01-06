// Import the functions you need from the SDKs you need
import {
  FirebaseApp,
  initializeApp
} from "firebase/app";
import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  addDoc,
  setDoc,
  Firestore
} from "firebase/firestore";
import {
  Auth,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  
  signOut
} from "firebase/auth";

import {
  getDatabase,
  Database
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class FireBase {
  private firebaseApp: FirebaseApp;
  private fireStoreDb: Firestore;
  private auth: Auth;
  private provider: GoogleAuthProvider;
  //private database: Database;
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
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(this.firebaseApp);
    this.provider = new GoogleAuthProvider();
    //this.database = getDatabase(this.firebaseApp);
    this.fireStoreDb = getFirestore(this.firebaseApp);

  }

  public signupEmailPasswoord(email: string, password: string, naam: string, achternaam: string, cb: () => void) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        this.user = userCredential.user;
        updateProfile(this.user, {
          displayName: naam + ' ' + achternaam
        }).then(function () {
          // Update successful.
        });
        cb();
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public signinEmailPasswoord(email: string, password: string, cb: () => void) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        this.user = userCredential.user;
        cb();
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public signinPopup(cb: () => void) {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
       // const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken;
        // The signed-in user info.
        this.user = result.user;
        cb();
        // ...
      }).catch((error) => {
        // Handle Errors here.
          console.log(error);
        // The email of the user's account used.
        //const email = error.customData.email;
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  public signOut(cb: () => void) {
    if (!this.user) {
      cb();
      return;
    }
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

  // get data from firestore
  public addTodoFirebase = async (text: string, todoId: string) => {
    const cardsSnapShot = collection(this.fireStoreDb, `lists/${todoId}/cards`);

    const docRef = await addDoc(cardsSnapShot, {
      title: text,
      description: '',
      comments: []
    });
    return docRef.id;
  }

  public updateTodoFirebase = async (todoListId: string, id: string, attribute: string, value: string) => {
    console.log(todoListId, id, attribute, value);
    if (attribute === 'title') {
      const answer = await setDoc(doc(this.fireStoreDb, `lists/${todoListId}/cards`, id), {
        title: value
      }, {
        merge: true
      });
      
      console.log(answer);
    } else {
      const answer = await setDoc(doc(this.fireStoreDb, `lists/${todoListId}/cards`, id), {
        description: value
      }, {
        merge: true
      });
      console.log(answer);
    }

  }


  public deleteTodoListFirebase = async (id: string) => {
    await deleteDoc(doc(this.fireStoreDb, "lists", id));
  }

  public deleteCardFromFirebase = async (todoListId: string, id: string) => {
    await deleteDoc(doc(this.fireStoreDb, `lists/${todoListId}/cards`, id));
  }

}