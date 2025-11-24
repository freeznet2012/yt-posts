import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthService } from './services/auth.service';

import { routes } from './app.routes';

export function initializeAuth(authService: AuthService) {
  return () => {
    // This ensures the auth session is loaded from URL hash before routing
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuth,
      deps: [AuthService],
      multi: true
    }
  ]
};
