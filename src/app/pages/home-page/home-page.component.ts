import { Component } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { RouterLink } from '@angular/router';
import {
  LucideHandCoins,
  LucideReceipt,
  LucideDollarSign,
  LucidePiggyBank,
} from '@lucide/angular';

@Component({
  selector: 'home-page',
  imports: [
    ChartComponent,
    LucideHandCoins,
    LucideReceipt,
    LucideDollarSign,
    LucidePiggyBank,
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
})
export default class HomePage {
  readonly chart = { type: 'bar' as const, height: 350 };
  readonly series = [
    {
      name: 'Ingresos',
      data: [12000, 15000, 11000, 18000],
    },
    {
      name: 'Gastos',
      data: [8000, 9500, 7000, 12000],
    },
  ];
  readonly goalChart1 = { type: 'gauge' as const, height: 350 };
  readonly goalSeries1 = [60];
  readonly goalChart2 = { type: 'gauge' as const, height: 350 };
  readonly goalSeries2 = [50];
  readonly labels1 = ['Progress'];
  readonly labels2 = ['Progress'];

  readonly plotOptions = {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
          offsetY: 30,
        },
        value: {
          show: true,
          offsetY: -10,
        },
      },
    },
  };
}
