import { Component, OnInit, Input } from '@angular/core';
import { ServiceListItem } from '../shared/models/service-list-item';

@Component({
  selector: 'bl-service-list-item',
  templateUrl: './service-list-item.component.html',
  styleUrls: ['./service-list-item.component.scss']
})
export class ServiceListItemComponent implements OnInit {

@Input() service_List_item : ServiceListItem={
  Icon:"helloooooooooooooo",
  Title:"hi",
  Descreption:"hhhh"
};
  constructor() { }

  ngOnInit() {
  }

}
