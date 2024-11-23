import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatingCardsComponent } from './alternating-cards.component';

describe('AlternatingCardsComponent', () => {
  let component: AlternatingCardsComponent;
  let fixture: ComponentFixture<AlternatingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternatingCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternatingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
