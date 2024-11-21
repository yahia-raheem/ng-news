import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo = input.required<string>()
  logoLink = input.required<string>()
  langImage = input.required<string>()
  langChangeLink = input.required<string>()

}
