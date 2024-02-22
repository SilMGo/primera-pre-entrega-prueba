import { Injectable,  } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Alumno } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { AlertService } from "../../../../core/services/alerts.service";
import { HttpClient } from "@angular/common/http";

// simula base de datos
let alumnos :  Alumno [] = [
   
]
@Injectable ()
export class AlumnosService {

    constructor  (
        private  loadingService: LoadingService,
        private alertService: AlertService,
        private httpclient: HttpClient){}

   //metodo q consulta alumnos
    getAlumnos() {
       this.loadingService.setIsLoading(true)
        return of(alumnos). pipe(delay (1500),
       finalize(() => this.loadingService.setIsLoading(false)));
       //return this.httpclient.get()
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