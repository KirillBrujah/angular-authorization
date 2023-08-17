import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const loggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);

  const observer = new Observable<boolean>(observer => {
    if (authService.isAuthenticated()) {
      router.navigate([""], { replaceUrl: true });
      observer.next(true);
      return;
    }

    authService.refresh().subscribe(
      (refreshSuccess) => {
        if (!refreshSuccess) {
          observer.next(true);
          return;
        }

        router.navigate([""], { replaceUrl: true });
        observer.next(true);
      }
    );
  });


  return observer;
};
