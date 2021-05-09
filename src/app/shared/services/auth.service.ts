import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async onLoginGoogle() {
    try {
      const authUser = this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      localStorage.setItem('user', JSON.stringify((await authUser).user));
      return authUser;
    } catch (error) {
      alert('hubo un error con el servicio de google,favor de intentar de nuevo o contactar a soporte');
    }
  }

  async logout() {
    try {
      localStorage.removeItem('user');
      return (await this.firebaseAuth.signOut());
    } catch (error) {
      alert('hubo un error con el servicio de google,contactar a soporte');
    }
  }

  async getCurrentUser() {
    try {
      return (await this.firebaseAuth.authState.pipe(first()).toPromise());
    } catch (error) {
      alert('hubo un error con el servicio de google,contactar a soporte');
    }
  }

}
