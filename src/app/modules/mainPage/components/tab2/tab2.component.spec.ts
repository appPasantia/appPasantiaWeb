/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ComponentRef, DebugElement } from '@angular/core';

import { Tab2Component } from './tab2.component';
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


describe('Tab2Component', () => {
  let component: Tab2Component;
  let fixture: ComponentFixture<Tab2Component>;
  const routes: Routes = [
    { path: "", component: MainPageComponent },
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Component],
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig),
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
    fixture = TestBed.createComponent(Tab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('E mail check- No deberia ver si el correo es valido', () => {
    let email = component.loginForm.controls['correo'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');

  });

  it('E mail check- deberia ver si el correo es valido formato', () => {
    let email = component.loginForm.controls['correo'];
    email.setValue('abc@gmail.com')
    expect(email.errors).toBeNull();

  });


  it('[Nombre-Check]- deberia ver errores en nombre', () => {
    let name = component.loginForm.controls['nombre'];
    expect(name.errors['required']).toBeTruthy();
    name.setValue('1234');
    expect(name.errors['minlength']).toBeTruthy();

  });

  it('[Nombre-Check]- No deberia ver errores en nombre ', () => {
    let name = component.loginForm.controls['nombre'];
    name.setValue('123456');
    expect(name.errors).toBeNull();
    expect(name.valid).toBeTruthy();

  });

  it('[Empresa-Check]- deberia ver errores en empresa', () => {
    let emp = component.loginForm.controls['empresa'];
    expect(emp.errors['required']).toBeTruthy();
    emp.setValue('acbs');
    expect(emp.errors['minlength']).toBeTruthy();

  });

  it('[Empresa-Check]- No deberia ver errores en empresa ', () => {
    let emp = component.loginForm.controls['nombre'];
    emp.setValue('qweasd');
    expect(emp.errors).toBeNull();
    expect(emp.valid).toBeTruthy();

  });

  it('[Requisitos-Check]- deberia ver errores en requisitos', () => {
    let reqq = component.loginForm.controls['empresa'];
    expect(reqq.errors['required']).toBeTruthy();
    reqq.setValue('acbs');
    expect(reqq.errors['minlength']).toBeTruthy();

  });

  it('[Requisitos-Check]- No deberia ver errores en requisitos ', () => {
    let reqq = component.loginForm.controls['requisistos'];
    reqq.setValue('qweasd');
    expect(reqq.errors).toBeNull();
    expect(reqq.valid).toBeTruthy();

  });

  it('[area-Check]- deberia ver errores en area', () => {
    let ar = component.loginForm.controls['area'];
    expect(ar.errors['required']).toBeTruthy();
    ar.setValue('acbs');
    expect(ar.errors['minlength']).toBeTruthy();

  });

  it('[area-Check]- No deberia ver errores en area ', () => {
    let ar = component.loginForm.controls['area'];
    ar.setValue('qweasd');
    expect(ar.errors).toBeNull();
    expect(ar.valid).toBeTruthy();

  });


  it('[Form-Submit]- Verifica si el boton añadió ', () => {
    //checkform invalido
    expect(component.loginForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('.botonpublicar'));
    //check boton esta inhabilitado
    expect(btn.nativeElement.disabled).toBeTruthy();

    component.loginForm.controls['nombre'].setValue('nombre123');
    component.loginForm.controls['empresa'].setValue('empresa222');
    component.loginForm.controls['requisistos'].setValue('requisistos123');
    component.loginForm.controls['correo'].setValue('loro@gmail.com');
    component.loginForm.controls['area'].setValue('nombre123');
    component.loginForm.controls['logo'].setValue('nombrdwaae123');
    fixture.detectChanges();
    //ver el boton si esta enabled
    expect(btn.nativeElement.disabled).toBeFalsy();

    component.guardarPasantia();
    fixture.detectChanges();




  });




});


