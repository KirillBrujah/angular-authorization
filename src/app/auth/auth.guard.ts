import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable} from 'rxjs';

export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const observer = new Observable<boolean>(observer => {

    if (authService.isAuthenticated()) {
      observer.next(true);
      return;
    }
    
    authService.refresh().subscribe(
      (refreshSuccess) => {
        if (refreshSuccess) {
          observer.next(true);
          return;
        }

        router.navigate(["login"], { replaceUrl: true });
        observer.next(true);
      }
    );
  });


  return observer;
};
