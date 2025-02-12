import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonThumbnail,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notifications, list, eye, eyeOffOutline, eyeOutline} from 'ionicons/icons';
import { of } from 'rxjs';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
  imports: [
    CommonModule,
    IonThumbnail,
    IonIcon
  ]
})
export class HeaderHomeComponent  implements OnInit {

  /* Controla mostragem do saldo */
  balance: boolean =  false;

  constructor() {
    addIcons({ notifications, list, eye, eyeOffOutline, eyeOutline});
   }

  ngOnInit() {}

  /*Exibe saldo */
  show(){
    this.balance = true;
  }

  /*Oculta saldo */
  hide(){
    this.balance = false;
  }

}

