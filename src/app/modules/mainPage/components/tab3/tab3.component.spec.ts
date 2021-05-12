import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
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

describe('Tab3Component', () => {
  let component: Tab3Component;
  let fixture: ComponentFixture<Tab3Component>;
  const routes: Routes = [
   { path: "", component: MainPageComponent },
 ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Component ],
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
               AvatarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Name check- Se deberia llenar el campo nombre', () => {
    let name = component.postularForm.controls['nombre'];
    name.setValue('Prueba');
    expect(name.errors).toBeNull();
    expect(name.valid).toBeTruthy();
  });

  it('Email check- El campo email deberia estar lleno', () => {
    let correo = component.postularForm.controls['correo'];
    correo.setValue('correoprueba@email.com');
    expect(correo.errors).toBeNull();
    expect(correo.valid).toBeTruthy();
  });

  it('Cellphone check- Se deberia llenar el campo telefono', () => {
    let phone = component.postularForm.controls['telefono'];
    phone.setValue('60109265');
    expect(phone.errors).toBeNull();
    expect(phone.valid).toBeTruthy();
  });

  //TODO button check
});
