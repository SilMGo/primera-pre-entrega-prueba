import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    RouterModule.forChild ([
      {
        path: '',
       children: [
            {
              path: 'home',
              loadChildren: () =>
              import ('./pages-dashboard/home/home.module').then (
                (m) => m.HomeModule),
            },

            {
              path: 'cursos-products',
              loadChildren: () =>
              import ('./pages-dashboard/cursos-products/cursos-products.module').then (
                (m) => m.CursosProductsModule),
            },

            {
              path: 'alumnos-users',
              loadChildren: () =>
              import ('./pages-dashboard/alumnos-users/alumnos-users.module').then (
                (m) => m.AlumnosUsersModule),
            },

            {
              path: '**',
              redirectTo: 'home,'
            }


       ]
      },
        
      
     
  ])
  ]   
  
  
  
  
})
export class DashboardRoutingModule { }
