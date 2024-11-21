import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/global/header/header.component";
import { HeroComponent } from "../../components/global/hero/hero.component";

@Component({
  selector: 'app-bahrain',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './bahrain.page.html',
  styleUrl: './bahrain.page.scss'
})
export class BahrainPage {

}
