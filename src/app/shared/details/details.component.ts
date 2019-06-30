import { Component, OnInit, Input } from '@angular/core';
import { Ticker } from 'src/app/core/ticker.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() ticker: Ticker;

  constructor() { }

  ngOnInit() {
  }

}
