import { Component } from '@angular/core';
import { TitleAndDesc } from './shared/models/title-and-desc';

@Component({
  selector: 'bl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  about: TitleAndDesc = {
    title: "about title",
    description: "about description",
    imgUrl:"uhyiuiuy",
  };
  whyBlueLine: TitleAndDesc = {
    title: "why BlueLine title",
    description: "why BlueLine description"
  };

  getDesc() {
    return "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum dolor doloribus neque sunt labore, vitae molestias aspernatur at deleniti corporis iure reprehenderit earum a fugiat atque, ut ratione deserunt?"

  }
}
