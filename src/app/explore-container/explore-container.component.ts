import { IonContent, IonHeader} from '@ionic/angular/standalone';
import { Component, Input } from '@angular/core';
import { HeaderHomeComponent } from "../components/header-home/header-home.component";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [HeaderHomeComponent, IonContent, IonHeader],
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
