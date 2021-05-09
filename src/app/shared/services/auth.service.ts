import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async onLoginGoogle() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(result.user));
      }).catch((error) => {
        alert('hubo un error con el servicio de google,favor de intentar de nuevo o contactar a soporte');
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

}
