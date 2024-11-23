import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-bg-caption-2',
  standalone: true,
  imports: [],
  templateUrl: './global-bg-caption-2.component.html',
  styleUrl: './global-bg-caption-2.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GlobalBgCaption2Component {
  uppderDecoration = input<string>()
  bgImage = input.required<string>()
}
