import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-central-content',
  standalone: true,
  imports: [],
  templateUrl: './central-content.component.html',
  styleUrl: './central-content.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GlobalCentralContentComponent {
  bgImage = input<string>()
  upperDecoration = input<string>()
  extraClasses = input<string>('')
}
