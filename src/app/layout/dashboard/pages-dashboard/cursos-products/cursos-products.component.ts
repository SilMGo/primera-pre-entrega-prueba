import { Component } from '@angular/core';
import { Curso } from './models';
import { CursosService } from './cursos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursos-products',
  templateUrl: './cursos-products.component.html',
  styleUrl: './cursos-products.component.scss'
})
export class CursosProductsComponent {
  displayedColumns: string[] =['id', 'curseName','fechaInicio', 'fechaFin',  'actions'];

  cursos: Curso[] =[]

  constructor(private CursosService: CursosService) {
    this.CursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })

  }
  

}


