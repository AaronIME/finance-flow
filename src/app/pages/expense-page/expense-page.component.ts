import { Component } from '@angular/core';
import { LucideChevronLeft } from '@lucide/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-expense-page',
  imports: [LucideChevronLeft, RouterLink],
  templateUrl: './expense-page.component.html',
})
export default class ExpensePage {}
