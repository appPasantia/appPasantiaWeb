import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'tab3',
  template: `<form class="centerspace" (submit)="sendEmail2($event)">
  <mat-form-field>
    <mat-label>Nombre</mat-label>
    <input matInput class="inputclass"
      type="text"
      name="to_name" required
    >
  </mat-form-field>
  <mat-form-field  >
    <mat-label >Nombre de la página</mat-label>
    <input matInput class="inputclass"
      type="text"
      name="from_name" value="App Pasantia" required
    >
  </mat-form-field>
  <mat-form-field >
    <mat-label>Correo de la empresa</mat-label>
    <input matInput class="inputclass"
    type="email" name="email_to" value="{{correo}}" required
    >
  </mat-form-field>
  <mat-form-field >
    <mat-label>Mensaje</mat-label>
    <input matInput class="inputclass"
    type="text" name="message" value="{{mensaje}}" required
    >
  </mat-form-field>
  <mat-form-field >
    <mat-label>Telefono</mat-label>
    <input matInput class="inputclass"
    type="text" name="phone"  required
    >
  </mat-form-field>

  <input type="submit" value="Send" class="botonsend">
</form>
<!-- TODO que el boton este desactivado mientras no pongan el nombre y el telefono
  ademas bloquear algunos campos para que no puedan modificar los usuarios -->
`,
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {
  @Input() internshipInfo;
  @Output() changeTab = new EventEmitter();
  correo: string;
  barStatus = false;
  fileUpload = [];
  emailForm: FormGroup;

  nombre = '';
  telefono: number;
  postularForm: FormGroup;
  mensaje = 'Hay una nueva postulación a su pasantía';

  constructor(private router: Router) {
    this.correo = '';
    this.emailForm = new FormGroup({
      to_name: new FormControl('', [Validators.required]),
      email_to: new FormControl({ value: '', disabled: true }, [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl({ value: '', disabled: true }, [Validators.required]),
    });
  }
  ngOnInit() {
    this.correo = this.internshipInfo.correo;
    this.emailForm.controls['email_to'].setValue(this.correo);
    this.emailForm.controls['message'].setValue(this.mensaje);
  }

  ionViewDidLeave() {
    this.nombre = '';
    this.telefono = null;
  }

  public sendEmail2(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_5n3w2me', 'template_xavbtyi', e.target as HTMLFormElement, 'user_h3wl5X7fbp7lUayv6EeT6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('El correo fue enviado con exito!')
        this.changeTab.emit();
      }, (error) => {
        console.log(error.text);
      });
  }
}
