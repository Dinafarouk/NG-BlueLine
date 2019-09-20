import { Component, OnInit } from '@angular/core';
import { TitleAndDesc } from '../shared/models/title-and-desc';
import { Title } from '@angular/platform-browser';

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

Services=[
  {
    Icon:"DI",
    Title:"DIGITAL MARKETING",
    Description:"From researching how people behave on social to creating content that’ll entice them."
  },
  {
    Icon:"ME",
    Title:"MEDIA BUYING",
    Description:"Putting your work at the right spots, boosting and sponsoring them in the right areas.nbhg"
  },
  {
    Icon:"AD",
    Title:"ADVERTISING",
    Description:"Our advertising department specializes in showcasing your brand wherever your target audience go."
  }
]






  constructor() { }

  ngOnInit() {
  }

}
