import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatFishermenChartComponent } from './boat-fishermen-chart.component';

describe('BoatFishermenChartComponent', () => {
  let component: BoatFishermenChartComponent;
  let fixture: ComponentFixture<BoatFishermenChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatFishermenChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatFishermenChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
