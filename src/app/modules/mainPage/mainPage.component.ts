import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['../../app.component.scss']
})
export class MainPageComponent implements OnInit {
  tabs: number;
  actualUser: any;
  internshipInfoMP;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.actualUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.actualUser.photoURL);
    if(this.actualUser == null ){
      this.router.navigate(['/login']);
    }else{
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

  logout(){
    alert('Está por cerrando sesión');
    this.authService.logout();
    console.log("user logout", this.authService.getCurrentUser());
  }

}
