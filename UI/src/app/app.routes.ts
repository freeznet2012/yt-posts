import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { SavedPosts } from './pages/saved-posts/saved-posts';
import { Channels } from './pages/channels/channels';
import { Landing } from './pages/landing/landing';
import { Features } from './pages/features/features';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: Landing
    },
    {
        path: 'features',
        component: Features
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'saved', component: SavedPosts },
            { path: 'channels', component: Channels }
        ]
    }
];
