import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layout/aunth/auth.service';
import { Inject, inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const router= inject (Router);
  const authService = inject(AuthService);
  return authService.authUser?.rol === 'ADMIN'
    ? true
    : router.createUrlTree(['dashboard', 'home']);
};
