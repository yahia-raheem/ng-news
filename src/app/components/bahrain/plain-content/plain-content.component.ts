import { Component, ViewEncapsulation } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-plain-content',
  standalone: true,
  imports: [ObserveVisibilityDirective],
  templateUrl: './plain-content.component.html',
  styleUrl: './plain-content.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PlainContentComponent {

}
