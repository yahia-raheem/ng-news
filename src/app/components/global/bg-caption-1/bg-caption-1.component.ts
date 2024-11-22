import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-bg-caption-1',
  standalone: true,
  imports: [],
  templateUrl: './bg-caption-1.component.html',
  styleUrl: './bg-caption-1.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GlobalBgCaption1Component {
  bgImage = input.required<string>()
  lowerDecoration = input<string>()
}
