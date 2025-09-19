import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { authGuard } from './services/authguard';
export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login.component').then((c) => c.LoginComponent),
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],data: { roles: ["ADMIN","USER"] }
    },
    {
        path: 'add-user',
        component: AddUserComponent,
        canActivate: [authGuard],data: { roles: ["ADMIN"] }
    },
    {
        path: 'add-user/:Id',
        component: AddUserComponent,
        canActivate: [authGuard]
    }
];
