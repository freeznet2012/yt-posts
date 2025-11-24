import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { SavedPosts } from './pages/saved-posts/saved-posts';
import { Channels } from './pages/channels/channels';
import { Landing } from './pages/landing/landing';
import { Features } from './pages/features/features';

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
        path: '',
        component: MainLayout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'saved', component: SavedPosts },
            { path: 'channels', component: Channels }
        ]
    }
];
