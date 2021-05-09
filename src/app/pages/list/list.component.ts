import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pasantia } from 'src/app/models/pasantia';
import { PasantiaService } from 'src/app/services/pasantia.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  description: boolean = false;
  pasantias: Pasantia[] = [];
  emptyList: boolean = false;
  loader: boolean = false;

  private path = 'pasantias/';
  constructor(
    private router: Router,
    private pasantiaServeice: PasantiaService
  ) {}
  ngOnInit(): void {
    this.getpasantias();
  }

  seeMore(pasantia) {
    pasantia.visibilidad = !pasantia.visibilidad;
  }
  postular(pasantia) {
    //this.router.navigate([`/tabs/tab3/${pasantia.correo}`])
  }

  getpasantias() {
    this.pasantiaServeice
      .getCollectionPasantia<Pasantia>(this.path)
      .subscribe((res) => {
        console.log('RESPUESTA', res);
        if (res) {
          this.pasantias = res;
          console.log('RESPUEST', this.pasantias);
          this.loader = true;
        }
        if (this.pasantias.length == 0) {
          this.emptyList = true;
        } else {
          this.emptyList = false;
        }
      });
  }
}
