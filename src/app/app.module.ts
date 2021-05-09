import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

const routes: Routes = [
  {path: '', redirectTo: 'page', pathMatch:'full'},
  //{ path: 'login',loadChildren: ()=> import('./login/login.module').then(n => n.LoginModule) },
  { path: 'page',loadChildren: ()=> import('./pages/page.module').then(n => n.PageModule),

}
];

@NgModule({
  declarations: [
    AppComponent
   ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
