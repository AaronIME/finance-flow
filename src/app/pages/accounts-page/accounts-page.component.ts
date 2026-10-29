import { Component } from '@angular/core';
import { LucideSquarePen, LucidePlus, LucideTrash } from '@lucide/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-accounts-page',
  imports: [LucideSquarePen, LucidePlus, RouterLink, LucideTrash],
  templateUrl: './accounts-page.component.html',
})
export default class AccountsPage {}
