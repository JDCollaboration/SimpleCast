import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
