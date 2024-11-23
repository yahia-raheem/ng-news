import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BrowserOnlyDirective } from '../../../../directives/browser-only.directive';
import { ObserveVisibilityDirective } from '../../../../directives/observe-visibility.directive';

@Component({
  selector: 'app-boat-fishermen-chart',
  standalone: true,
  imports: [NgClass, BrowserOnlyDirective, ObserveVisibilityDirective],
  templateUrl: './boat-fishermen-chart.component.html',
  styleUrl: './boat-fishermen-chart.component.scss'
})
export class BoatFishermenChartComponent {
  selected = signal<string>('num-boats')

  selectTab(target: string) {
    this.selected.set(target)
  }
}
