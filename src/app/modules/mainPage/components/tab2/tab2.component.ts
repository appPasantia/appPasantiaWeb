import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternshipService } from 'src/app/shared/services/internship.service';

@Component({
  selector: 'tab2',
  template: `<div class="form-container">
  <header translucent="true">
    <title> Subir pasantia </title>
  </header>
  
  <content padding>
    <div class="centerdiv">
      <form [formGroup]="loginForm" class="centerspace" (ngSubmit)="onSaveForm()">
  
  
        <input type="text" class="input222" formControlName="nombre" placeholder="Nombre de pasantia">
        <div class="alert alert-danger" *ngIf="nombre.invalid && (nombre.dirty || nombre.touched)">
          <div class="container-error-message" *ngIf="nombre.errors.required">
            Nombre es requerido
          </div>
          <div class="container-error-message" *ngIf="nombre.errors.minlength">
            Debe tener 5 caracteres o mas
          </div>
        </div>
  
        <input type="text"  class="input222" formControlName="empresa" placeholder="Nombre de empresa">
        <div class="alert alert-danger" *ngIf="empresa.invalid && (empresa.dirty || empresa.touched)">
          <div class="container-error-message" *ngIf="empresa.errors.required">
            Empresa es requerido
          </div>
          <div class="container-error-message" *ngIf="empresa.errors.minlength">
            Debe tener 5 caracteres o mas
          </div>
        </div>
  
        <input type="text" class="input222" formControlName="requisistos" placeholder="Requisitos de pasantia">
        <div class="alert alert-danger" *ngIf="requisistos.invalid && (requisistos.dirty || requisistos.touched)">
          <div class="container-error-message" *ngIf="requisistos.errors.required">
            Requisitos es requerido
          </div>
          <div class="container-error-message" *ngIf="requisistos.errors.minlength">
            Debe tener 5 caracteres o mas
          </div>
        </div>
  
  
        <input type="text" class="input222" formControlName="correo" placeholder="Correo de pasantia">
        <div class="alert alert-danger" *ngIf="correo.invalid && (correo.dirty || correo.touched)">
          <div class="container-error-message" *ngIf="correo.errors.required">
            Correo es requerido
          </div>
          <div class="container-error-message" *ngIf="correo.errors.minlength">
            Debe tener 5 caracteres o mas
          </div>
          <div class="container-error-message" *ngIf="(correo.dirty || correo.touched) && correo.invalid && correo.errors.pattern">
            Ingresa un correo valido
          </div>
        </div>
  
        <input type="text" class="input222" formControlName="area" placeholder="Carrera">
        <div class="alert alert-danger" *ngIf="area.invalid && (area.dirty || area.touched)">
          <div class="container-error-message" *ngIf="area.errors.required">
            Carrera es requerido
          </div>
          <div class="container-error-message" *ngIf="area.errors.minlength">
            Debe tener 5 caracteres o mas
          </div>
        </div>
  
  
  
        <img src="assets/img/photo.png">
  
  
        <input type="text" class="input222" formControlName="logo" placeholder="Logo de pasantia">
        <div class="alert alert-danger" *ngIf="logo.invalid && (logo.dirty || logo.touched)">
          <div class="container-error-message" *ngIf="logo.errors.required">
            Logo es requerido
          </div>
          <div class="container-error-message" *ngIf="logo.errors.minlength">
            Debe tener 5 caracteres o mas
          </div>
        </div>
  
  
        <button (click)="guardarPasantia()" class="botonpublicar" mode="ios" size="small" color="dark"
          [disabled]="loginForm.invalid">Publicar pasantia</button>
  
      </form>
    </div>
  
  </content>
  </div>
  `,
  styleUrls: ['./tab2.component.scss'],
})
export class Tab2Component implements OnInit {

  @Output() changeTab = new EventEmitter();
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm: FormGroup;
  message: string;

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      empresa: new FormControl('', [Validators.required, Validators.minLength(5)]),
      requisistos: new FormControl('', [Validators.required, Validators.minLength(5)]),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      area: new FormControl('', [Validators.required, Validators.minLength(5)]),
      logo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  private path = 'pasantias/'
  constructor(private router: Router, private pasantiaServeice: InternshipService) {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.onResetForm();
  }
  onResetForm() {
    this.loginForm.reset();
  }

  onSaveForm() {
    if(this.loginForm.valid){
      this.message = "Se añadió la pasantia a la lista"
    this.loginForm.reset();
    }

  }

  get nombre() { return this.loginForm.get('nombre'); }
  get empresa() { return this.loginForm.get('empresa'); }
  get requisistos() { return this.loginForm.get('requisistos'); }
  get correo() { return this.loginForm.get('correo'); }
  get area() { return this.loginForm.get('area'); }
  get logo() { return this.loginForm.get('logo'); }

  ionViewDidLeave() {
    this.loginForm.reset();
  }

  ngOnDestroy() {

  }

  pasantia() {

  }

  input() {

  }
  guardarPasantia() {

    const id = this.pasantiaServeice.getID();
    this.pasantiaServeice.createPasantias(Object.assign(this.loginForm.value, {date: new Date()}), this.path, id);
    alert('Pasantia se añadió correctamente a la lista');
    this.onResetForm();
    this.changeTab.emit();
    console.log('form', this.loginForm.value)

  }


}
