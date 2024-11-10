import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerColumnarCardComponent } from './player-columnar-card.component';

describe('PlayerColumnarCardComponent', () => {
  let component: PlayerColumnarCardComponent;
  let fixture: ComponentFixture<PlayerColumnarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerColumnarCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerColumnarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
