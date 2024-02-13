
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosProductsRoutingModule } from './cursos-products-routing.module';
import { CursosProductsComponent } from './cursos-products.component';
import { SharedModule } from '../../../../shared/shared.module';
//import {MatTableModule} from '@angular/material/table'; no hace falta porque esta en SharedModule
import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
//import { MatTableDataSource } from '@angular/material/table';  no hace falta porque esta en SharedModule

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@NgModule ({
  declarations: [
    CursosProductsComponent,
    ProductDialogComponent
  ],
  imports: [
    CommonModule,
    CursosProductsRoutingModule,
    SharedModule, // estan todos acá
    //FormsModule,
    //ReactiveFormsModule,
    //MatTableDataSource,
    MatIconModule,

    //MatIconModule,  
    Component,
    DatePipe
  ],
  providers: [CursosService, DatePipe],
  exports: [CursosProductsComponent]
})
export class CursosProductsModule { 
 
 
  

}
