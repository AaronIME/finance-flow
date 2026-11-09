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
        path: 'edit-account/:id',
        loadComponent: () => import('./pages/create-update-account-page/create-update-account-page.component'),
        title: 'Editar cuenta',
      },
      { 
        path: 'accounts',
        loadComponent: () => import('./pages/accounts-page/accounts-page.component'),
        title: 'Cuentas',
      },
      {
        path: 'expenses',
        loadComponent: () => import('./pages/expenses-page/expenses-page.component'),
        title: 'Gastos'
      },
      {
        path: 'expense/:id',
        loadComponent: () => import('./pages/expense-page/expense-page.component'),
        title: 'Gasto'
      },
      {
        path: 'create-expense',
        loadComponent: () => import('./pages/create-update-expense-page/create-update-expense-page.component'),
        title: 'Crear Gasto'
      },
      {
        path: 'edit-expense/:id',
        loadComponent: () => import('./pages/create-update-expense-page/create-update-expense-page.component'),
        title: 'Editar Gasto'
      },
      {
        path: 'budgets',
        loadComponent: () => import('./pages/budgets-page/budgets-page.component'),
        title: 'Presupuestos'
      },
      {
        path: 'create-budget',
        loadComponent: () => import('./pages/create-update-budget-page/create-update-budget-page.component'),
        title: 'Crear Presupuesto'
      },
      {
        path: 'edit-budget/:id',
        loadComponent: () => import('./pages/create-update-budget-page/create-update-budget-page.component'),
        title: 'Editar Presupuesto'
      },
      {
        path: 'goals',
        loadComponent: () => import('./pages/goals-page/goals-page.component'),
        title: 'Objetivos'
      },
      {
        path: 'create-goal',
        loadComponent: () => import('./pages/create-update-goal-page/create-update-goal-page.component'),
        title: 'Crear Objetivo'
      },
      {
        path: 'edit-goal/:id',
        loadComponent: () => import('./pages/create-update-goal-page/create-update-goal-page.component'),
        title: 'Editar Objetivo'
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
