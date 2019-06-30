import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { MainComponent } from './main/main.component';
import { SummaryComponent } from './summary/summary.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StockComponent, MainComponent, SummaryComponent],
  exports: [StockComponent, MainComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
