import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pagination } from '../../components/shared/pagination/pagination';
import { LucideTrash, LucidePlus } from '@lucide/angular'

@Component({
  selector: 'app-goals',
  imports: [RouterLink, Pagination, LucidePlus, LucideTrash],
  templateUrl: './goals-page.component.html',
})
export default class Goals {}
