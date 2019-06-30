import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TickerService } from 'src/app/core/ticker.service';
import { Ticker } from 'src/app/core/ticker.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  private ticker: Ticker;
  private showActions: boolean = true;
  private symbol: string = '';
  private successful: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private tickerService: TickerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.symbol = params['symbol'];
      this.tickerService.lookupSymbol(this.symbol).subscribe(
        data => {
          if (data) {
            this.ticker = data;
          }
        }
      )

      const watchlist = JSON.parse(localStorage.getItem('watchlist'));
      this.showActions = watchlist.indexOf(this.symbol) === -1
    })
  }

  handleWatch(symbol: string) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (watchlist.indexOf(symbol) == -1) {
      watchlist.push(symbol);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      this.showActions = false;
      this.successful = true;
    }
  }
}
