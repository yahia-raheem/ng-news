import { Component } from '@angular/core';
import { GlobalBgCaption1Component } from "../../global/bg-caption-1/bg-caption-1.component";
import { QuoteComponent } from "../quote/quote.component";
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { BrowserOnlyDirective } from '../../../directives/browser-only.directive';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-bg-caption-2',
  standalone: true,
  imports: [GlobalBgCaption1Component, QuoteCardComponent, BrowserOnlyDirective, ObserveVisibilityDirective],
  templateUrl: './bg-caption-2.component.html',
  styleUrl: './bg-caption-2.component.scss'
})
export class BgCaption2Component {

}
