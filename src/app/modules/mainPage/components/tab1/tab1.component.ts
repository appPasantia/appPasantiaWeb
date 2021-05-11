import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  private path = 'pasantias/'
  constructor( private internshipService: InternshipService) { }
  ngOnInit(): void {
    this.getpasantias();
  }


  seeMore(pasantia) {
    pasantia.visibilidad = this.chageVisivilidad(pasantia)
  }
  chageVisivilidad(pasantia){
    return !pasantia.visibilidad
  }

  postular(pasantia) {
    this.internshipTab1.emit(pasantia);
  }

  getpasantias() {
    this.internshipService.getCollectionPasantia<Pasantia>(this.path).subscribe((res) => {
      if (res) {
        this.pasantias = this.sortList(res);
        this.loader = true;
        console.log('PASANTIAS', this.pasantias, res)
      }
      if (this.pasantias.length == 0) {
        this.emptyList = true;
      } else {
        this.emptyList = false;
      }
    });
    console.log('PASANTIAS', this.pasantias);

  }

  sortList(pasantias:any){
    return pasantias.sort((a, b) =>b.date - a.date);
  }

}
