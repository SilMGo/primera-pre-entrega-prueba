import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../core/services/alerts.service";
import { delay, finalize, map, of } from 'rxjs';
import { LoadingService } from "../../core/services/loading.service";
import { Alumno } from "../dashboard/pages-dashboard/alumnos-users/models";



interface LoguinData {
    email: null | string;
    password: null | string;
}
@Injectable ({providedIn: 'root'})
export class AuthService {
    authUser: Alumno | null = null;

   constructor (
    private router: Router, 
    private alertService: AlertService,
    private loadingService: LoadingService
    ) {}

   login(data:LoguinData): void {

    const MOCK_USER = {
        id: 48,
        email: '123@123.com',
         name: '123',
        lastName: '123',
        password: '123',
        rol: 'ADMIN',
    }
    if (
        data.email ===MOCK_USER.email &&
        data.password===MOCK_USER.password) {
        this.authUser =MOCK_USER;
        localStorage.setItem(
            'token',
            'sdfsdfwertet45er64tr4afsdf'
        );
        this.router.navigate (['dashboard', 'home']);
           }else {
            this.alertService.showError ('email o pass incorrecto');
           }
        }
logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
}

veryfyToken() {
    this.loadingService.setIsLoading(true);
    return of (localStorage.getItem('token'))
    .pipe (delay (1000),
    map ((response) => !!response),
    finalize(() => this.loadingService.setIsLoading(false))
    );

}
}

