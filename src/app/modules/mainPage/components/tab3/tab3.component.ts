import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  constructor(private http: HttpClient,private route: ActivatedRoute) {
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

  public sendEmail(e: Event) {

    console.log("EVENTO",e.preventDefault());
    e.preventDefault();
    emailjs.sendForm('service_5n3w2me', 'template_p2qmxmr', e.target as HTMLFormElement, 'user_h3wl5X7fbp7lUayv6EeT6')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      let data = {
        service_id: 'service_5n3w2me',
        template_id: 'template_p2qmxmr',
        user_id: 'user_h3wl5X7fbp7lUayv6EeT6',
        template_params: {
          to_name: this.emailForm.value.to_name,
          email_to: this.emailForm.value.email_to,
          phone: this.emailForm.value.phone,
          message: this.emailForm.value.message
        }
      };

      this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
        .subscribe((result) => {
          alert('Your message has been sent!');
        }, (error: HttpErrorResponse) => {
          alert('Oops... ' + error.message);
        }
      );


  }
  ionViewDidLeave() {
    this.nombre = '';
    this.telefono = null;
  }

}
