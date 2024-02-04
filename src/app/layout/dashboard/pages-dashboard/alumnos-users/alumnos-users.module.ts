import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosUsersComponent } from './alumnos-users.component';
import {MatTableModule} from '@angular/material/table';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import {MatInputModule} from '@angular/material/input'; //usado x alumnos-form
import {MatFormFieldModule} from '@angular/material/form-field';  //usado x alumnos-form
import {MatSelectModule} from '@angular/material/select';  //usado x alumnos-form
import {MatButtonModule} from '@angular/material/button';  //usado x alumnos-form
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    AlumnosUsersComponent,
    AlumnosFormComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,      //input usado x alumnos-form
    MatFormFieldModule,     // formulario envoltura usado x alumnos-form
    MatSelectModule,  //selector usado x alumnos-form
    MatButtonModule,//boton usado x alumnos-form 
   ReactiveFormsModule,
    SharedModule
  ],
  exports: [AlumnosUsersComponent ]
})
export class AlumnosUsersModule { 

}