import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { PasantiaService } from 'src/app/services/pasantia.service';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
const routes: Routes = [
  {path: '', component: ListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [ListComponent],

})
export class ListModule { }
