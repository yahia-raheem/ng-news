import { Component, input, ViewEncapsulation } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ObserveVisibilityDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None
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
