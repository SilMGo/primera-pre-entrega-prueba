import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Curso } from "./models";

@Injectable()
export class CursosService {
  

    getCursos () {
        const cursos: Curso []=[
            {id: 1,
            name: 'asd',
            startDate: new Date ()
            },    
            {id: 2,
            name: 'qwe',
            startDate: new Date ()
            }, 
            
            {id: 3,
            name: 'zxc',
            startDate: new Date ()
            }, 


        ]
        return of(cursos).pipe(delay (2000)) //demorará 2seg en cargar la tabla de cursos
    }
}