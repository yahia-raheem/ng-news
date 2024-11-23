import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBgCaption2Component } from './global-bg-caption-2.component';

describe('GlobalBgCaption2Component', () => {
  let component: GlobalBgCaption2Component;
  let fixture: ComponentFixture<GlobalBgCaption2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalBgCaption2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalBgCaption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
