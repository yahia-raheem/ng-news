import { Component } from '@angular/core';
import { GlobalBgCaption1Component } from '../../global/bg-caption-1/bg-caption-1.component';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';
import { BrowserOnlyDirective } from '../../../directives/browser-only.directive';
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";

@Component({
  selector: 'app-bg-caption-1',
  standalone: true,
  imports: [GlobalBgCaption1Component, BrowserOnlyDirective, ObserveVisibilityDirective, QuoteCardComponent],
  templateUrl: './bg-caption-1.component.html',
  styleUrl: './bg-caption-1.component.scss'
})
export class BgCaption1Component {

}
