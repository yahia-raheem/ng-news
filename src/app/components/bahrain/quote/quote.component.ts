import { Component, signal, ViewChild, viewChild } from '@angular/core';
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { PopupComponent } from "../../global/popup/popup.component";
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [QuoteCardComponent, PopupComponent, ObserveVisibilityDirective],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  isPopupVisible = signal<boolean>(false)

  openPopup() {
    this.isPopupVisible.set(true)
  }

  closePopup() {
    this.isPopupVisible.set(false)
  }

}
