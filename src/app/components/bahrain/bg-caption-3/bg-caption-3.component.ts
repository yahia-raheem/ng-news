import { Component } from '@angular/core';
import { GlobalBgCaption2Component } from "../../global/global-bg-caption-2/global-bg-caption-2.component";
import { QuoteCardComponent } from "../../global/quote-card/quote-card.component";
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-bg-caption-3',
  standalone: true,
  imports: [GlobalBgCaption2Component, QuoteCardComponent, NgTemplateOutlet],
  templateUrl: './bg-caption-3.component.html',
  styleUrl: './bg-caption-3.component.scss'
})
export class BgCaption3Component {

}
