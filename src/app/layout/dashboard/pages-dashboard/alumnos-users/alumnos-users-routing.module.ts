import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnosUsersComponent } from './alumnos-users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';



@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    RouterModule.forChild ([
        {
          path: '',
          component:AlumnosUsersComponent,
        },

        {
          path: 'id',
          component: UserDetailComponent,
        },

    ])
        ],
  exports: [RouterModule]
})
export class AlumnosUsersRoutingModule { }
