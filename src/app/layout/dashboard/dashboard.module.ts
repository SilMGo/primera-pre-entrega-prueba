import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AlumnosUsersModule } from './pages-dashboard/alumnos-users/alumnos-users.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pages-dashboard/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages-dashboard/home/home.component';
import { AlumnosUsersComponent } from './pages-dashboard/alumnos-users/alumnos-users.component';
import { CursosProductsComponent } from './pages-dashboard/cursos-products/cursos-products.component';
import { UserDetailComponent } from './pages-dashboard/alumnos-users/pages/user-detail/user-detail.component';
import { CursosProductsModule } from './pages-dashboard/cursos-products/cursos-products.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

 @NgModule({
  declarations: [
    DashboardComponent,
   
    
   
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    AlumnosUsersModule, 
    ReactiveFormsModule,
    PipesModule,
    SharedModule,
    DashboardRoutingModule,
    MatListModule,
    DashboardRoutingModule,
    RouterModule, 
    
    
  ],
  exports: [DashboardComponent],
})
  
export class DashboardModule { 


  }
