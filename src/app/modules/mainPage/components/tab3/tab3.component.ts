import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {
  correo: string;

  constructor(private route: ActivatedRoute) {
    this.correo='';
  }
  ngOnInit() {
    this.correo = this.route.snapshot.paramMap.get('correo');
    alert(this.correo);
  }

}
