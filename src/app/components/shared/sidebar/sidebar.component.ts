import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideFileText, LucideDynamicIcon, LucideLogOut } from '@lucide/angular';

@Component({
  selector: 'sidebar',
  imports: [RouterLink, RouterLink, RouterLinkActive, LucideDynamicIcon, LucideLogOut],
  templateUrl: './sidebar.component.html',
})

export class Sidebar {
  menuOptions = [
    {
      title: "Dashboard",
      icon: LucideFileText,
      route: "/dashboard/home"
    },
    {
      title: "Mis cuentas",
      icon: LucideFileText,
      route: "/dashboard/accounts"
    },
    {
      title: "Objetivos",
      icon: LucideFileText,
      route: "/dashboard/accounts"
    },
    {
      title: "Gastos",
      icon: LucideFileText,
      route: "/dashboard/expenses"
    },
    {
      title: "Presupuestos",
      icon: LucideFileText,
      route: "/dashboard/budgets"
    },

  ]
}
