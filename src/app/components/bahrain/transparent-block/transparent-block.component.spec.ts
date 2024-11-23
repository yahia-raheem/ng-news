import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentBlockComponent } from './transparent-block.component';

describe('TransparentBlockComponent', () => {
  let component: TransparentBlockComponent;
  let fixture: ComponentFixture<TransparentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparentBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
