import { Component, input } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';
import { BrowserOnlyDirective } from '../../../directives/browser-only.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ObserveVisibilityDirective, BrowserOnlyDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  bgVid = input.required<string>()
  cardTitle = input.required<string>()
  cardText = input.required<string>()
  cardSuffix = input.required<string>()
  footerText = input.required<string>()
  buttonText = input.required<string>()
  buttonLink = input.required<string>()
}
