import { Injectable,  } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Alumno } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";

// simula base de datos
let alumnos :  Alumno [] = [
    {
        id: 1,
        name: "Juan",
        lastName: 'Lopez',
        email: 'juanlop125@gmail.com',
        rol: "ADM",
    },

    {
        id: 2,
        name: "Celina",
        lastName: 'Rodriguez',
        email: 'celiro122@gmail.com',
        rol: "ALUM",
    },
    {
        id: 3,
        name: "Romina",
        lastName: 'Gonzalez',
        email: 'RoroG125@gmail.com',
        rol: "ALUM",
    },
]
@Injectable ()
export class AlumnosService {

    constructor  (private  loadingService: LoadingService){}

    getAlumnos() {
       this.loadingService.setIsLoading(true)
        return of(alumnos). pipe(delay (1500),
        finalize(() => this.loadingService.setIsLoading(false)));
    }
    createAlumnos(data:Alumno) {
        alumnos = [...alumnos, {...data, id:alumnos.length+1}];

    return this.getAlumnos();
    }


//ELIMINAR PRODUCTOS DE LA TABLA
    deleteAlumnoById(id: number){
        alumnos = alumnos.filter ((el) => el.id != id);
        return this.getAlumnos();
    }
    updateAlumnoById(id: number, data: Alumno) {
        alumnos = alumnos.map((el) => (el.id ===id ? {...el, ...data} : el));
        return this.getAlumnos();
    }

}