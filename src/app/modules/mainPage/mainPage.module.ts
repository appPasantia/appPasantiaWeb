import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './mainPage.component';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './components/tab1/tab1.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
  ],
  declarations: [
    MainPageComponent,
    Tab1Component
  ]
})
export class MainPageModule { }
