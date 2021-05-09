import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternshipService } from 'src/app/shared/services/internship.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss'],
})
export class Tab2Component implements OnInit {

  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm: FormGroup;


  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      empresa: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      requisistos: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      area: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
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
    this.pasantiaServeice.createPasantias(this.loginForm.value, this.path, id);
    this.onResetForm();
    this.router.navigate(['/tabs/tab1'])
    console.log('form', this.loginForm.value)

  }


}
