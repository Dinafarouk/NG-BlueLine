import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'bl-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {


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
