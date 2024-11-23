import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-transparent-block-content',
  standalone: true,
  imports: [ObserveVisibilityDirective],
  templateUrl: './transparent-block-content.component.html',
  styleUrl: './transparent-block-content.component.scss'
})
export class TransparentBlockContentComponent {

}
