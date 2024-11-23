import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCaption2Component } from './bg-caption-2.component';

describe('BgCaption2Component', () => {
  let component: BgCaption2Component;
  let fixture: ComponentFixture<BgCaption2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgCaption2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCaption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
