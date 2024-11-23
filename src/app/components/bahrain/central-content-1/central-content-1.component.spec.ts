import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralContent1Component } from './central-content-1.component';

describe('CentralContent1Component', () => {
  let component: CentralContent1Component;
  let fixture: ComponentFixture<CentralContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralContent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
