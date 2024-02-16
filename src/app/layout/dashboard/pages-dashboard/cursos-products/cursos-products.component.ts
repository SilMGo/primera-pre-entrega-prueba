import { Component } from '@angular/core';
import { Curso } from './models';
import { CursosService } from './cursos.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-cursos-products',
  templateUrl: './cursos-products.component.html',
  styleUrl: './cursos-products.component.scss'
})
export class CursosProductsComponent {
  displayedColumns: string[] =['id', 'name','startDate', 'fechaFin',  'actions'];

  cursos: Curso[] =[]

  constructor(
    private CursosService: CursosService, 
    private loadingService: LoadingService) {
    this.CursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })

  }
  

}