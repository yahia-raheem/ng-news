import { NgClass } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './quote-card.component.html',
  styleUrl: './quote-card.component.scss',
})
export class QuoteCardComponent {
  showIcon = input<boolean>(false)
  extraClasses = input<string>('')
}
