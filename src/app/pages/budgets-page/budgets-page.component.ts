import { Component } from '@angular/core';
import { Pagination } from '../../components/shared/pagination/pagination';
import {LucideTrash, LucidePlus} from '@lucide/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-budgets-page',
  imports: [Pagination, LucideTrash, RouterLink, LucidePlus],
  templateUrl: './budgets-page.component.html',
})
export default class BudgetsPage {}
