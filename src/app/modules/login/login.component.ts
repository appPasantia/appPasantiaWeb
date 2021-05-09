import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    //Current User verification
    const actualUser = localStorage.getItem('user');
    if(actualUser != null){
      
      this.router.navigate(['/mainPage']);
    }
  }
  
  async onLoginGoogle(){
    try {
      await (this.authService.onLoginGoogle()).then( ()=> {
        this.router.navigate(['/mainPage']);
      } );
    } catch (error) {
      alert('Error al iniciar sesión, Favor contactarse con soporte')
    }
  }

}
