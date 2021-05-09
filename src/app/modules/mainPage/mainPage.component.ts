import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['../../app.component.scss']
})
export class MainPageComponent implements OnInit {
  tabs: number;

  internshipInfoMP;

  constructor() { }

  ngOnInit() {
    this.tabs = 1;
  }

  showComponent(tab: number) {
    this.tabs = tab;
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  changeToTab3(internshipInf) {
    this.internshipInfoMP = internshipInf;
    this.showComponent(3);
  }

}
