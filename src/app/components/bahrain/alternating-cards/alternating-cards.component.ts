import { Component, ViewEncapsulation } from '@angular/core';
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-alternating-cards',
  standalone: true,
  imports: [QuoteCardComponent, ObserveVisibilityDirective],
  templateUrl: './alternating-cards.component.html',
  styleUrl: './alternating-cards.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AlternatingCardsComponent {

}
