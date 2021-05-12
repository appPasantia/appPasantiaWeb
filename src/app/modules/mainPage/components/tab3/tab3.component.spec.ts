import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailValidator, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AvatarModule } from 'ngx-avatar';
import { environment } from 'src/environments/environment';
import { MainPageComponent } from '../../mainPage.component';

import { Tab3Component } from './tab3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('Tab3Component', () => {
  let component: Tab3Component;
  let fixture: ComponentFixture<Tab3Component>;

  const routes: Routes = [
   { path: "", component: MainPageComponent },
 ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Component, MainPageComponent],
      imports:[AngularFireModule.initializeApp(environment.firebaseConfig),
       AngularFireAuthModule,
               CommonModule,
               RouterModule.forChild(routes),
               ReactiveFormsModule,
               MatButtonModule,
               MatIconModule,
               MatFormFieldModule,
               MatInputModule,
               NgxSkeletonLoaderModule,
               RouterTestingModule,
               AvatarModule,
               FormsModule,
               BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Component);
    component = fixture.componentInstance;
    component.internshipInfo = {
      correo: "prueba@gmail.com"
    }
    component.correo = component.internshipInfo.correo;
    fixture.detectChanges();
  });

  it('should create', ()=> {
    expect(component).toBeTruthy();
  });

  it('[Name check]- Se deberia llenar el campo nombre', () => {
    let name = component.emailForm.controls["to_name"];
    name.setValue("Prueba");
    expect(name.errors).toBeNull();
    expect(name.valid).toBeTruthy()
  });

  it('[Email check]- El campo email deberia estar lleno', () => {
    let correo = component.emailForm.controls['email_to'];
    correo.setValue('correoprueba@email.com');
    expect(correo.errors).toBeNull();
  });

  it('[Cellphone check]- Se deberia llenar el campo telefono', () => {
    let phone = component.emailForm.controls['phone'];
    phone.setValue('60109265');
    expect(phone.errors).toBeNull();
  });

  it('[Button check]- El boton deberia mandar la informacion', async(() => {
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('.botonsend'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.nombre).toBe('');
    })
  }));
});
