import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinAunthComponent } from './loguin-aunth/loguin-aunth.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoguinAunthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([

      { path: 'aunth/loguin-aunth',
      component: LoguinAunthComponent,
    },



    ])
  ],
  exports: [
    LoguinAunthComponent,
  ]
})
export class AunthModule { }
