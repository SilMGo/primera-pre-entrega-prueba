import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layout/aunth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
const router= inject (Router);
const authService = Inject (AuthService);


  return authService
    .veryfyToken()
    .pipe(
      map((isAuthenticated) =>
        isAuthenticated ? true : router.createUrlTree(['auth', 'login'])
      )
    );

};