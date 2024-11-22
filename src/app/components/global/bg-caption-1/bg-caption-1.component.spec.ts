import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCaption1Component } from './bg-caption-1.component';

describe('BgCaption1Component', () => {
  let component: BgCaption1Component;
  let fixture: ComponentFixture<BgCaption1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgCaption1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCaption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
