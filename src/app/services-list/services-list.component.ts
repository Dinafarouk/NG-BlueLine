import { Component, OnInit } from '@angular/core';
import { TitleAndDesc } from '../shared/models/title-and-desc';

@Component({
  selector: 'bl-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  service_title: TitleAndDesc = {
    title: "SERVICES",
    description: "We take pride in what we do. Our services are designed to help your business stand out and turn your ideas into realities."
  }
  constructor() { }

  ngOnInit() {
  }

}
