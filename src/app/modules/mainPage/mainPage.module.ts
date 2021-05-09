import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './mainPage.component';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';;
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const routes: Routes = [
  { path: "", component: MainPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [
    MainPageComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component
  ]
})
export class MainPageModule { }
