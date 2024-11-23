import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCaption4Component } from './bg-caption-4.component';

describe('BgCaption4Component', () => {
  let component: BgCaption4Component;
  let fixture: ComponentFixture<BgCaption4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgCaption4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCaption4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
