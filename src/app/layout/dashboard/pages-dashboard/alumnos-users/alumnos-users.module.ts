import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosUsersComponent } from './alumnos-users.component';



@NgModule({
  declarations: [
    AlumnosUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AlumnosUsersComponent ]
})
export class AlumnosUsersModule { }
