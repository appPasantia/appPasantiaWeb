import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'tab3',
  templateUrl: './tab3.component.html',
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

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) {
    this.correo = '';
    this.emailForm=new FormGroup({
      to_name: new FormControl('', [Validators.required]),
      email_to: new FormControl({value:'', disabled: true},[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      message: new FormControl({value:'', disabled: true},[Validators.required]),

      });
  }
  ngOnInit() {
    console.log("tab3", this.internshipInfo)
    this.correo = this.internshipInfo.correo;
    this.emailForm.controls['email_to'].setValue(this.correo);
    this.emailForm.controls['message'].setValue(this.mensaje);
    console.log("tab3", this.emailForm.value)
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
