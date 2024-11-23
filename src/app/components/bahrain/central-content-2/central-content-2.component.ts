import { Component } from '@angular/core';
import { GlobalCentralContentComponent } from "../../global/central-content/central-content.component";
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { BrowserOnlyDirective } from '../../../directives/browser-only.directive';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-central-content-2',
  standalone: true,
  imports: [GlobalCentralContentComponent, QuoteCardComponent, BrowserOnlyDirective, ObserveVisibilityDirective],
  templateUrl: './central-content-2.component.html',
  styleUrl: './central-content-2.component.scss'
})
export class CentralContent2Component {

}
