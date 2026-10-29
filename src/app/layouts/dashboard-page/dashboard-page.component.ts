import { Component } from '@angular/core';
import { Navbar } from '../../components/shared/navbar/navbar.component';
import { Sidebar } from '../../components/shared/sidebar/sidebar.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'dashboard-page',
  imports: [Navbar, Sidebar, RouterOutlet],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPage {
  
}
