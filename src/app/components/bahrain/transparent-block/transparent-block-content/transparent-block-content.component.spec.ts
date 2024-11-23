import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentBlockContentComponent } from './transparent-block-content.component';

describe('TransparentBlockContentComponent', () => {
  let component: TransparentBlockContentComponent;
  let fixture: ComponentFixture<TransparentBlockContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparentBlockContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparentBlockContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
