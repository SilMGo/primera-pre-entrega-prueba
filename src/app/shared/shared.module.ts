import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';
import { RepetirDirective } from './repetir.directive';
import {MatTableModule} from '@angular/material/table'; //tabla Angular Material
import {MatSelectModule} from '@angular/material/select'; //select Angular material
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective
  ],
  imports: [
    CommonModule,
    

  ],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
     RepetirDirective,
     MatTableModule, //Angular Material
     MatSelectModule,//Angular Material
     MatButtonModule, //Angular Material 
    
    ]
})
export class SharedModule { }
