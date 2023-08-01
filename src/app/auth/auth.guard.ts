import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { delay } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated()
    .then<boolean | UrlTree>(((isLogged) => {
      if (!isLogged) {
        return inject(Router).createUrlTree(["login"]);
      }
      return true;
    }))
    .catch(() => {
      return router.createUrlTree(["login"]);
    });

  const isLoggedIn = authService.isAuthenticated();
  console.log({ isLoggedIn });
  if (!isLoggedIn) {

    return new Promise<boolean | UrlTree>((resolve) => setTimeout(() => resolve(router.createUrlTree(["login"])), 3000));
    // const router = inject(Router);
    // router.navigate(["loing"], {replaceUrl: true})
    return inject(Router).createUrlTree(["login"]);
    // return true;
  }

  return true;
};
