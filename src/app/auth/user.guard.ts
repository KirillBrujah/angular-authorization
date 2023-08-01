import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated()
    .then<boolean>(((isLogged) => {
      if (!isLogged) {
        return false;
      }
      return true;
    }))
    .catch(() => {
      return false;
    });




  // console.log("Can activate calling");
  // const authService = inject(AuthService); 
  // const isLoggedIn = authService.isAuthenticated();
  // console.log({isLoggedIn});
  // if (!isLoggedIn) {
  //   // const router = inject(Router);
  //   // router.navigate(["loing"], {replaceUrl: true})
  //   return false;
  //   // return inject(Router).createUrlTree(["login"]);
  //   // return true;
  // }

  // return true;  
};
