import { Component } from '@angular/core';
import { GlobalCentralContent2Component } from "../../global/global-central-content-2/global-central-content-2.component";
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-central-content-3',
  standalone: true,
  imports: [GlobalCentralContent2Component, QuoteCardComponent, ObserveVisibilityDirective],
  templateUrl: './central-content-3.component.html',
  styleUrl: './central-content-3.component.scss'
})
export class CentralContent3Component {

}
