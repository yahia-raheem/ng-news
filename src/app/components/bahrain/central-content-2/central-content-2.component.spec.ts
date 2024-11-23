import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralContent2Component } from './central-content-2.component';

describe('CentralContent2Component', () => {
  let component: CentralContent2Component;
  let fixture: ComponentFixture<CentralContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
