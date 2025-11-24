import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.session$.pipe(
        take(1),
        map(session => {
            if (session) {
                return true;
            }
            return router.createUrlTree(['/login']);
        })
    );
};
