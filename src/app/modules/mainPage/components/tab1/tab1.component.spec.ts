import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
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
  describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
      a = true;

      expect(a).toBe(true);
    });
  });
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
            AvatarModule
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
