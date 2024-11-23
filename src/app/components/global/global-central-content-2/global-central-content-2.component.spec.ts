import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCentralContent2Component } from './global-central-content-2.component';

describe('GlobalCentralContent2Component', () => {
  let component: GlobalCentralContent2Component;
  let fixture: ComponentFixture<GlobalCentralContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalCentralContent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalCentralContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
