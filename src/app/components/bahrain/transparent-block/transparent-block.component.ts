import { Component, ViewEncapsulation } from '@angular/core';
import { TransparentBlockContentComponent } from "./transparent-block-content/transparent-block-content.component";

@Component({
  selector: 'app-transparent-block',
  standalone: true,
  imports: [TransparentBlockContentComponent],
  templateUrl: './transparent-block.component.html',
  styleUrl: './transparent-block.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TransparentBlockComponent {

}
