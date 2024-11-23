import { Component } from '@angular/core';
import { GlobalBgCaption1Component } from "../../global/bg-caption-1/bg-caption-1.component";
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { BrowserOnlyDirective } from '../../../directives/browser-only.directive';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-bg-caption-4',
  standalone: true,
  imports: [GlobalBgCaption1Component, QuoteCardComponent, BrowserOnlyDirective, ObserveVisibilityDirective],
  templateUrl: './bg-caption-4.component.html',
  styleUrl: './bg-caption-4.component.scss'
})
export class BgCaption4Component {

}
