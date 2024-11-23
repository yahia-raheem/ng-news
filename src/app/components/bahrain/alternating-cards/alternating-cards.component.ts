import { Component } from '@angular/core';
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";

@Component({
  selector: 'app-alternating-cards',
  standalone: true,
  imports: [QuoteCardComponent],
  templateUrl: './alternating-cards.component.html',
  styleUrl: './alternating-cards.component.scss'
})
export class AlternatingCardsComponent {

}
