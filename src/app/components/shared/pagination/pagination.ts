import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideChevronsLeft, LucideChevronLeft, LucideChevronRight, LucideChevronsRight } from '@lucide/angular';

@Component({
  selector: 'pagination',
  imports: [RouterLink, LucideChevronLeft, LucideChevronRight, LucideChevronsLeft, LucideChevronsRight],
  templateUrl: './pagination.html',
})
export class Pagination {}
