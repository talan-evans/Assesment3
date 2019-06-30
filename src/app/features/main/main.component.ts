import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private watchlist: string[] = [];

  constructor() { }

  ngOnInit() {
    this.watchlist = JSON.parse(localStorage.getItem('watchlist'));
  }

  handleRemove(symbol: string) {
    this.watchlist = this.watchlist.filter(item => item !== symbol);
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }
}
