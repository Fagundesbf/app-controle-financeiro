import { Component, OnInit } from '@angular/core';
import {
  IonThumbnail,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notifications, list} from 'ionicons/icons';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
  imports: [
    IonThumbnail,
    IonIcon
  ]
})
export class HeaderHomeComponent  implements OnInit {

  constructor() {
    addIcons({ notifications, list });
   }

  ngOnInit() {}

}

