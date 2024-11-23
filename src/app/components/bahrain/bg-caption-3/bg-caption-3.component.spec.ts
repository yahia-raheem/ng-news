import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCaption3Component } from './bg-caption-3.component';

describe('BgCaption3Component', () => {
  let component: BgCaption3Component;
  let fixture: ComponentFixture<BgCaption3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgCaption3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCaption3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
