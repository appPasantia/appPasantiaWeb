import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {
  @Input() internshipInfo;

  correo: string;
  barStatus = false;
  fileUpload = [];
  emailForm: FormGroup;

  nombre = '';
  telefono: number;
  postularForm: FormGroup;
  mensaje = 'Hay una nueva postulación a su pasantía';

  constructor(private route: ActivatedRoute) {
    this.correo = '';
    this.emailForm=new FormGroup({
      to_name: new FormControl('', [Validators.required]),
      email_to: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),

      });
  }
  ngOnInit() {
    console.log("tab3", this.internshipInfo)
    this.correo = this.internshipInfo.correo;
  }

  public sendEmail(e: Event) {
    console.log(e);
    e.preventDefault();
    emailjs.sendForm('service_5n3w2me', 'template_p2qmxmr', e.target as HTMLFormElement, 'user_h3wl5X7fbp7lUayv6EeT6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  ionViewDidLeave() {
    this.nombre = '';
    this.telefono = null;
  }

}
