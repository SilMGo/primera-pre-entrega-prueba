import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Curso } from "./models";

//BASE DE DATOS
let cursos: Curso []=[
    {id: 1,
    name: 'assdfsdfd',
    startDate: new Date ()
    },    
    {id: 245,
    name: 'qsdfsdfwe',
    startDate: new Date ()
    }, 
    
    {id: 13,
    name: 'zsdfsdfxc',
    startDate: new Date ()
    }, 
]
@Injectable()
export class CursosService {
  getCursos () {
    return of(cursos).pipe(delay (2000)) //demorará 2seg en cargar la tabla de cursos
    }
    
deleteCursoById(id:number){
    cursos = cursos.filter ((el) => el.id != id);
    return this.getCursos();
}
}