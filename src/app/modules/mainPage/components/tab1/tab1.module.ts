import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [Tab1Component]
})
export class Tab1Module { }
