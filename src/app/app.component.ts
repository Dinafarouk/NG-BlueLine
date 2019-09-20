import { Component } from '@angular/core';
import { TitleAndDesc } from './shared/models/title-and-desc';

@Component({
  selector: 'bl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  about: TitleAndDesc = {
<<<<<<< HEAD
    title: "ABOUT BLUELINE",
    description: "BLUELINE is a quality-oriented agency that provides a variety of professional services through creative & simple solutions. BLUELINE Agency contributes a wide range of marketing and media-based services."
  };
  whyBlueLine: TitleAndDesc = {
    title: "WHY CHOOSE BLUELINE",
    description: "BLUELINE plans on giving you a fulfilling professional experience using unique approaches & convenient out-the-box results by innovative staﬀ driven to satisfy all the client’s needs."
=======
    title: "about title",
    description: "about description",
    imgUrl:"uhyiuiuy",
  };
  whyBlueLine: TitleAndDesc = {
    title: "why BlueLine title",
    description: "why BlueLine description"
>>>>>>> c6d475ca618c3a8776a49e8f9de7273678e294ce
  };

  getDesc() {
    return "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum dolor doloribus neque sunt labore, vitae molestias aspernatur at deleniti corporis iure reprehenderit earum a fugiat atque, ut ratione deserunt?"

  }
}
