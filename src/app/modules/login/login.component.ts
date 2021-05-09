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
  }
  
  onLoginGoogle(){
    /*this.authService.onLoginGoogle().
    then( ()=> {
      this.router.navigate(['/mainPage']);
    } ).
    catch( (err)=>{
      alert('Error al iniciar sesión, Favor contactarse con soporte')
    } );*/
  }

}
