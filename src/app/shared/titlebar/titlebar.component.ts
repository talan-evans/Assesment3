import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @Input() name: string;
  @Input() symbol: string;

  constructor() { }

  ngOnInit() {
  }

}
