import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './features/stock/stock.component';
import { MainComponent } from './features/main/main.component';

const routes: Routes = [
  { path: "stock/:symbol", component: StockComponent },
  { path: "**", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
