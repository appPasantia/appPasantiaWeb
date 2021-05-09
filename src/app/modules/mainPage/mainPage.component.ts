import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['../../app.component.scss']
})
export class MainPageComponent implements OnInit {
  showTab1:boolean=true;
  showTab2:boolean=false;
  showTab3:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  showComponent(tab: number ){
    console.log(tab)
    if(tab==1){
      this.showTab1=true;
      this.showTab2= false;
      this.showTab3= false;
    }
    if (tab==2){
      console.log( this.showTab2)
      this.showTab2=true;
      this.showTab1= false;
      this.showTab3= false;
    }
    if (tab==3){
      this.showTab3=true
      this.showTab2= false;
      this.showTab1= false;
    }
    document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
  }

}
