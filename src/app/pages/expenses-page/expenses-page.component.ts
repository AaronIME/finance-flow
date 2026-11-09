import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucidePlus, LucideTrash } from "@lucide/angular"
import { Pagination } from '../../components/shared/pagination/pagination';

@Component({
  selector: 'app-expenses-page',
  imports: [RouterLink, LucidePlus, Pagination, LucideTrash ],
  templateUrl: './expenses-page.component.html',
})
export default class ExpensesPage {}
