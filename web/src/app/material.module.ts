import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
