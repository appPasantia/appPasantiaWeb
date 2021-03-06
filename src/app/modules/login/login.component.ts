import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  template: `<!DOCTYPE html>
  <html>
  
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  
  <title>Pasantías Web</title>
  <meta
      content="Hacemos simple el contacto humano entre empresas y estudiantes. Descarga nuestra app movil para android e iOS."
      name="description">
  
  <head>
      <div class="container d-flex align-items-center">
      </div>
      <title>Login</title>
  </head>
  
  <body>
      <section id="hero">
          <div class="centerright">
              <div class="col-lg-7 pt-5 pt-lg-0 order-2 d-flex align-items-center">
                  <div data-aos="zoom-out align-items-center">
                      <h1> ¡Pasantias <span>Únete Ya! ok</span></h1>
                      <h2>Hacemos simple el contacto humano entre empresas y estudiantes.
                      </h2>
                      <div class="text-center text-lg-left">
                          <button class="legend login" (click)="onLoginGoogle()">Login Google</button>
                      </div>
                  </div>
              </div>
          </div>
  
          <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28 " preserveAspectRatio="none">
              <defs>
                  <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                  </path>
              </defs>
              <g class="wave1">
                  <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
                  </use>
              </g>
              <g class="wave2">
                  <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
                  </use>
              </g>
              <g class="wave3">
                  <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
                  </use>
              </g>
          </svg>
      </section>
  
      <main id="main">
          <section id="us" class="about">
              <div class="container-fluid">
                  <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 aos-init aos-animate"
                      data-aos="fade-left">
                      <h3>¿Quiénes Somos?</h3>
                      <p>Somos una startup comprometida con la agilización de la inserción laboral universitaria.<br>
                          Donde Las Empresas podrán publicar ofertas de pasantías de la manera tradicional;
                          así como también buscar al candidato ideal a través del MatchMaking.
                          Y Los Estudiantes podrán crear su primer curriculum estandarizado y tendrán la posibilidad de
                          postular a ofertas de su interés,
                          así como ser contactados directamente por reclutadores de empresas.
                      </p>
                      <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                          <div class="icon"><i class="bx bx-donate-blood"></i></div>
                          <h4 class="title"><a>Misión</a></h4>
                          <p class="description">Brindar a los estudiantes que se encuentren egresados o en los últimos
                              semestres de sus respectivas carreras,
                              herramientas de búsqueda de pasantías para facilitar la transición de la etapa universitaria
                              a la laboral.
                          </p>
                      </div>
                      <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                          <div class="icon"><i class="bx bx-glasses-alt"></i></div>
                          <h4 class="title"><a>Visión</a></h4>
                          <p class="description">Ser el mejor nexo entre los estudiantes y empresas en cuanto a pasantías.
                              Alcanzar la atención de los estudiantes universitarios y empresas a nivel nacional.
                          </p>
                      </div>
                      <div class="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                          <div class="icon"><i class="bx bx-book-reader"></i></div>
                          <h4 class="title"><a>Valores</a></h4>
                          <p class="description">Confianza, Compromiso, Trabajo en equipo, Colaboración, Innovación,
                              Aprendizaje continuo.</p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  </body>
  
  </html>`,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    //Current User verification
    const actualUser = localStorage.getItem('user');
    if (actualUser != null) {
      this.router.navigate(['/mainPage']);
    }
  }

  async onLoginGoogle() {
    try {
      await (this.authService.onLoginGoogle()).then(() => {
        this.router.navigate(['/mainPage']);
      });
    } catch (error) {
      this.authService.logout();
      alert('Error al iniciar sesión, Favor contactarse con soporte')
    }
  }
}
