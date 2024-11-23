import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralContent3Component } from './central-content-3.component';

describe('CentralContent3Component', () => {
  let component: CentralContent3Component;
  let fixture: ComponentFixture<CentralContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralContent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
