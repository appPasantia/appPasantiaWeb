import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import firebase from "firebase/app";

@Component({
  selector: 'app-mainPage',
  template: `<!DOCTYPE html>
  <html>
  <body class=" light-grey  content" style="max-width:1600px">
    <nav class="sidebar  collapse  white  animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
      <div class="center">
        <img src="{{actualUser?.photoURL}}" alt="Avatar">
        <h4><b>{{actualUser?.displayName}}</b></h4>
      </div>
      <div class=" container text-teal">
        <h4><b>Menu</b></h4>
      </div>
      <div class="bar-block">
        <a (click)="showComponent(1)" class="bar-item  button  padding"><i
            class="fa fa-th-large fa-fw  margin-right"></i>LISTA DE LAS PASANTÍAS</a>
        <a (click)="showComponent(2)" class="ar-item  button  padding"><i
            class="fa fa-user fa-fw  margin-right"></i>AGREGAR PASANTÍAS</a>
        <a href="#contact" (click)="logout()" class=" bar-item  button  padding"><i
            class="fa fa-envelope fa-fw  margin-right"></i>CERRAR SESIÓN</a>
      </div>
    </nav>
    <div class=" main" style="margin-left:300px">
      <header id="portfolio">
        <div class=" container text-teal ">
          <h1><b> Pasantías </b></h1>
          <div class=" section  bottombar  padding-16">
          </div>
        </div>
      </header>
      <div [ngSwitch]="tabs">
        <a *ngSwitchCase=1>
          <tab1 (internshipTab1)="changeToTab3($event)"></tab1>
        </a>
        <a *ngSwitchCase=2>
          <tab2 (changeTab)="changeToTab1()"></tab2>
        </a>
        <a *ngSwitchCase=3>
          <tab3 (changeTab)="changeToTab1()" [internshipInfo]="internshipInfoMP"></tab3>
        </a>
      </div>
    </div>
  </body>
  
  </html>`,
  styleUrls: ['../../app.component.scss']
})
export class MainPageComponent implements OnInit {
  tabs: number;
  actualUser: any;
  internshipInfoMP;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.actualUser = JSON.parse(localStorage.getItem('user'));
    if (this.actualUser == null) {
      this.router.navigate(['/login']);
    } else {
      this.tabs = 1;
    }
  }

  showComponent(tab: number) {
    this.tabs = tab;
    document.getElementById("mySidebar").style.display = "none";
  }

  changeToTab3(internshipInf) {
    this.internshipInfoMP = internshipInf;
    this.showComponent(3);
  }

  logout() {
    alert('Está por cerrando sesión');
    this.authService.logout();
    console.log("user logout", this.authService.getCurrentUser());
  }

  changeToTab1() {
    this.showComponent(1);
  }

  ngAfterViewInit() {
    try {
      firebase.analytics().logEvent('WebPage has been used', {
        'userName': this.actualUser.displayName,
        'email': this.actualUser.email
      });
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }
}