import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input() symbol: string;
  @Output() watchEvent: EventEmitter<string> = new EventEmitter();
  @Output() buyEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  watch() {
    this.watchEvent.emit(this.symbol);
  }

  buy() {
    this.buyEvent.emit(this.symbol);
  }

}
