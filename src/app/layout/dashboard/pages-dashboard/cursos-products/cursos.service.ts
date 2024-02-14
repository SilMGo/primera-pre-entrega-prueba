import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Curso } from "./models";

@Injectable()
export class CursosService {
  

    getCursos () {
        const cursos: Curso []=[
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
        return of(cursos).pipe(delay (2000)) //demorará 2seg en cargar la tabla de cursos
    }
}