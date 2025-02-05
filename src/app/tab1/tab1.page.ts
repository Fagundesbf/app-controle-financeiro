import { Component } from '@angular/core';
import {  IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderHomeComponent } from '../components/header-home/header-home.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ IonContent, ExploreContainerComponent, HeaderHomeComponent],
})
export class Tab1Page {
  constructor() {}
}
