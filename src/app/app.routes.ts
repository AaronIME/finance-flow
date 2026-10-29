import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./layouts/dashboard-page/dashboard-page.component'),
    children: [
      { 
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component'),
        title: 'Home',
      },
      { 
        path: 'create-account',
        loadComponent: () => import('./pages/create-update-account-page/create-update-account-page.component'),
        title: 'Crear cuenta',
      },
      { 
        path: 'edit-account',
        loadComponent: () => import('./pages/create-update-account-page/create-update-account-page.component'),
        title: 'Editar cuenta',
      },
      { 
        path: 'accounts',
        loadComponent: () => import('./pages/accounts-page/accounts-page.component'),
        title: 'Cuentas',
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  },
  {
    path: "register",
    loadComponent: () => import('./pages/register-page/register-page.component'),
    title: "Registro"
  },
  {
    path: "login",
    loadComponent: () => import('./pages/login-page/login-page.component'),
    title: "Login"
  },
  {
    path: '**',
    redirectTo: 'dashboard/home',
  }
];
