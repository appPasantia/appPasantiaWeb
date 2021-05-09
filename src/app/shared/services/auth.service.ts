import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(public authfire : AngularFireAuth) { }

async onLoginGoogle() {
  return this.authfire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

onLogout() : void{
  this.authfire.signOut();
}

}
