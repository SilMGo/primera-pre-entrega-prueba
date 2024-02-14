import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosUsersComponent } from './alumnos-users.component';

import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import {MatInputModule} from '@angular/material/input'; //usado x alumnos-form

import {MatSelectModule} from '@angular/material/select';  //usado x alumnos-form

import { SharedModule } from '../../../../shared/shared.module';

import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AlumnosUsersRoutingModule } from './alumnos-users-routing.module';


@NgModule({
  declarations: [
    AlumnosUsersComponent,
    AlumnosFormComponent,
    UserDetailComponent,
     
    
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    SharedModule, //contiene lo de angular material
    MatTooltipModule,
    RouterModule, 
    AlumnosUsersRoutingModule,

    
    
  
    
  ],
  exports: [AlumnosUsersComponent ]
})
export class AlumnosUsersModule { 

}