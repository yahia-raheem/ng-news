import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCaption5Component } from './bg-caption-5.component';

describe('BgCaption5Component', () => {
  let component: BgCaption5Component;
  let fixture: ComponentFixture<BgCaption5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgCaption5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCaption5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
