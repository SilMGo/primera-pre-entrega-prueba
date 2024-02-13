
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosProductsRoutingModule } from './cursos-products-routing.module';
import { CursosProductsComponent } from './cursos-products.component';
import { SharedModule } from '../../../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import { Component } from '@angular/core';


@NgModule ({
  declarations: [
    CursosProductsComponent
  ],
  imports: [
    CommonModule,
    CursosProductsRoutingModule,
    SharedModule,
    MatTableModule,
    Component
  ],
  exports: [CursosProductsComponent]
})
export class CursosProductsModule { 
 
 
  

}
