import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pagecom.component.html'
})
export class PagecomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onLogout(){
//this.authService.logout();
  }

}
