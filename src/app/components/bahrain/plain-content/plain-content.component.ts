import { Component } from '@angular/core';
import { BrowserOnlyDirective } from '../../../directives/browser-only.directive';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-plain-content',
  standalone: true,
  imports: [BrowserOnlyDirective, ObserveVisibilityDirective],
  templateUrl: './plain-content.component.html',
  styleUrl: './plain-content.component.scss'
})
export class PlainContentComponent {

}
