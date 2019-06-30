import { Component, OnInit, OnDestroy } from '@angular/core';
import { TickerService } from './core/ticker.service';
import { Ticker } from './core/ticker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private symbol: string;

  constructor(
    private tickerService: TickerService,
    private router: Router) { }

  ngOnInit() {
    const watchlist = localStorage.getItem('watchlist');
    if (!watchlist) {
      localStorage.setItem('watchlist', '[]');
    }
  }

  lookupSymbol() {
    this.tickerService.lookupSymbol(this.symbol).subscribe(
      (data: Ticker) => {
        if (data) {
          this.router.navigate(['stock', this.symbol]);
          this.symbol = '';
        }
      },
      error => {
        alert(this.symbol + ' is not supported.');
        this.symbol = '';
      }
    )
  }
}