import { OnModuleInit } from "@nestjs/common";

import { FirebaseOptions, FirebaseApp, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

export class FirebaseService implements OnModuleInit {
  private firebaseConfig: FirebaseOptions;
  private app: FirebaseApp;
  private auth;

  constructor() {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    this.firebaseConfig = {
      apiKey: "AIzaSyDmLlXalK9m-J3krCzf_B43Ff3Bqqx_3UE",
      authDomain: "auth-app-fetim.firebaseapp.com",
      projectId: "auth-app-fetim",
      storageBucket: "auth-app-fetim.appspot.com",
      messagingSenderId: "364376702861",
      appId: "1:364376702861:web:aee332f4e86a409cf407c4",
      measurementId: "G-X1LLBDMNBN",
    };
  }

  async onModuleInit() {
    this.app = await initializeApp(this.firebaseConfig);
    this.auth = getAuth();
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    return user.user;
  }
}
