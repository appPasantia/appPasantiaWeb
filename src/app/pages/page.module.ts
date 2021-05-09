import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagecomComponent} from './pagecom.component'
import { PageRoutingModule } from './page-routing.module';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [PagecomComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    RouterModule,
    MatButtonModule

  ],
  exports:[


  ]
})
export class PageModule { }
