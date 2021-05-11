import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pasantia } from 'src/app/shared/models/pasantia';
import { InternshipService } from 'src/app/shared/services/internship.service';

@Component({
  selector: 'tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {
  @Output() internshipTab1 = new EventEmitter();


  description: boolean = false;
  pasantias: Pasantia[] = [];
  emptyList: boolean = false;
  loader: boolean = false;

  search:string;
  total = [];


  private path = 'pasantias/'
  constructor(private router: Router, private internshipService: InternshipService) { }
  ngOnInit(): void {
    this.getpasantias();
  }


  seeMore(pasantia) {
    pasantia.visibilidad = !pasantia.visibilidad
  }

  postular(pasantia) {
    this.internshipTab1.emit(pasantia);;
    //this.router.navigate([`/tabs/tab3/${pasantia.correo}`])
  }

  getpasantias() {
    this.internshipService.getCollectionPasantia<Pasantia>(this.path).subscribe((res) => {
      if (res) {
        this.pasantias = res;
        this.loader = true;

      }
      if (this.pasantias.length == 0) {
        this.emptyList = true;
      } else {
        this.emptyList = false;
      }
    });
    console.log('PASANTIAS', this.pasantias)
  }

  searchInternship(): void {
    this.total = [];
    if(this.search == null || this.search == ''){
      this.getpasantias();
      this.total = [];
      console.log('TOTAL:', this.total);
    } else {
      this.pasantias.filter(s =>
        s.area.includes(this.search.toLowerCase()) ? this.total.push(s) : '' ||
        s.nombre.includes(this.search.toLowerCase()) ? this.total.push(s) : ''
      );
      this.pasantias = this.total.filter(s => s.nombre);
      console.log('TOTAL:', this.total);
    }
  }
}
