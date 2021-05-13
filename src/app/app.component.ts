import { AfterViewInit, Component } from '@angular/core';
import firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'pasantia';

  ngAfterViewInit(){
    try {
      firebase.analytics().logEvent('Someone has enter to the page');
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  }

}
