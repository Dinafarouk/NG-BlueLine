import { Component, OnInit, Input } from '@angular/core';
import { TitleAndDesc } from '../shared/models/title-and-desc';

@Component({
  selector: 'bl-title-and-desc-widget',
  templateUrl: './title-and-desc-widget.component.html',
  styleUrls: ['./title-and-desc-widget.component.scss']
})
export class TitleAndDescWidgetComponent implements OnInit {

  @Input() mydata: TitleAndDesc

  constructor() { }

  ngOnInit() {
  }

}
