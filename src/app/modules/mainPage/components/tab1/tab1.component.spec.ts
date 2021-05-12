import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AvatarModule } from 'ngx-avatar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { InternshipService } from 'src/app/shared/services/internship.service';
import { environment } from 'src/environments/environment';
import { MainPageComponent } from '../../mainPage.component';
import { Tab2Component } from '../tab2/tab2.component';
import { Tab3Component } from '../tab3/tab3.component';

import { Tab1Component } from './tab1.component';

describe('Tab1Component', () => {

     let component: Tab1Component;
     let fixture: ComponentFixture<Tab1Component>;
    // let de: DebugElement;

    // let service: InternshipService;
    // let spy: jasmine.Spy;
    const routes: Routes = [
      { path: "", component: MainPageComponent },
    ];

     beforeEach(async(() => {

         TestBed.configureTestingModule({
          imports: [
            AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            NgxSkeletonLoaderModule,
            AvatarModule,
            FormsModule
          ],
          declarations: [
            MainPageComponent,
            Tab1Component,
            Tab2Component,
            Tab3Component
          ],providers:[
            InternshipService
          ]
         })
             .compileComponents();
     }));

     it('El método chageVisivilidad deberia cambiar valor booleano para mostrar los requisistos o no', async(() => {
      const fixture = TestBed.createComponent(Tab1Component);
      const app = fixture.debugElement.componentInstance;
      expect(app.chageVisivilidad(false)).toEqual(true);;
    }));

    it('El método ordena correctamente la lista de pasantias', async(() => {
      const pasantia=[
        {
          "nombre": "UPB",
          "area": "fsdfsfsdfsdf",
          "date": {
              "seconds": 1620693408,
              "nanoseconds": 593000000
          },
          "correo": "ch.rash37@gmail.com",
          "requisistos": "ngfngfnfgnfgn",
          "empresa": "fgnfgnfgnfg",
          "logo": "https://fee.upb.edu/wp-content/uploads/UPB-GE-color-03.png"
      },
        {
          "correo": "ch.rash37@gmail.com",
          "area": "sdfsdfdfsdf",
          "requisistos": "dsfsdfdsfsdf",
          "empresa": "dfgdfgfdgdfgdfg",
          "date": {
              "seconds": 1620691102,
              "nanoseconds": 631000000
          },
          "nombre": "Amazon",
          "logo": "https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png"
      },{
        "correo": "yukisaki1998@gmail.com",
        "logo": "http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",
        "date": {
            "seconds": 1620694072,
            "nanoseconds": 102000000
        },
        "nombre": "Twitter",
        "empresa": "fthfthtfh",
        "requisistos": "fthfthfthft",
        "area": "sdfsfsdfsd"
    }

    ]
      const fixture = TestBed.createComponent(Tab1Component);
      const app = fixture.debugElement.componentInstance;

      const ordenada=pasantia.sort((a, b) => a.date.nanoseconds-b.date.nanoseconds);;
      expect(ordenada[0].nombre).toEqual('Twitter');
    }));
    // beforeEach(() => {
    //     fixture = TestBed.createComponent(Tab1Component);
    //     component = fixture.componentInstance;
    //     de = fixture.debugElement;

    //     service = de.injector.get(InternshipService);
    //     spy = spyOn(service, 'getID').and.returnValue('msg');  //here we put the name of the method, msg is what we espect to got

    //     fixture.detectChanges();
    // });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
