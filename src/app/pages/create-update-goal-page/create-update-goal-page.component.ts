import { Component } from '@angular/core';
import { Pagination } from '../../components/shared/pagination/pagination';
import {LucideTrash, LucidePlus} from '@lucide/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-update-goal-page',
  imports: [Pagination, LucidePlus, LucideTrash, RouterLink],
  templateUrl: './create-update-goal-page.component.html',
})
export default class CreateUpdateGoalPage {}
