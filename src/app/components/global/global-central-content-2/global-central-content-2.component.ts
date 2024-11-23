import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-central-content-2',
  standalone: true,
  imports: [],
  templateUrl: './global-central-content-2.component.html',
  styleUrl: './global-central-content-2.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GlobalCentralContent2Component {
  bgImage = input<string>()
}
