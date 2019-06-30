import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticker } from 'src/app/core/ticker.model';
import { TickerService } from 'src/app/core/ticker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() symbol: string;
  @Output() removeEvent: EventEmitter<string> = new EventEmitter();

  private ticker: Ticker;

  constructor(private tickerService: TickerService, private router: Router) { }

  ngOnInit() {
    this.tickerService.lookupSymbol(this.symbol).subscribe(
      data => {
        if (data) {
          this.ticker = data;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  remove() {
    this.removeEvent.emit(this.symbol);
  }

}