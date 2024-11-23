import { Component } from '@angular/core';
import { GlobalBgCaption1Component } from "../../global/bg-caption-1/bg-caption-1.component";
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-bg-caption-5',
  standalone: true,
  imports: [GlobalBgCaption1Component, QuoteCardComponent, ObserveVisibilityDirective],
  templateUrl: './bg-caption-5.component.html',
  styleUrl: './bg-caption-5.component.scss'
})
export class BgCaption5Component {

}
