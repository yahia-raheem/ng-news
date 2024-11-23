import { Component } from '@angular/core';
import { GlobalCentralContentComponent } from "../../global/central-content/central-content.component";
import { BoatFishermenChartComponent } from "./boat-fishermen-chart/boat-fishermen-chart.component";
import { NgTemplateOutlet } from '@angular/common';
import { ObserveVisibilityDirective } from '../../../directives/observe-visibility.directive';
import { IconCardComponent } from "../../global/icon-card/icon-card.component";

@Component({
  selector: 'app-central-content-1',
  standalone: true,
  imports: [GlobalCentralContentComponent, BoatFishermenChartComponent, NgTemplateOutlet, ObserveVisibilityDirective, IconCardComponent],
  templateUrl: './central-content-1.component.html',
  styleUrl: './central-content-1.component.scss'
})
export class CentralContent1Component {

}
