import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { PriceComponent } from './price/price.component';
import { DetailsComponent } from './details/details.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [TitlebarComponent, PriceComponent, DetailsComponent, ActionsComponent],
  exports: [TitlebarComponent, PriceComponent, DetailsComponent, ActionsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
