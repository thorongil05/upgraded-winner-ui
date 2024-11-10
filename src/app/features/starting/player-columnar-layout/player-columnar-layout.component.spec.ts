import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerColumnarLayoutComponent } from './player-columnar-layout.component';

describe('PlayerColumnarLayoutComponent', () => {
  let component: PlayerColumnarLayoutComponent;
  let fixture: ComponentFixture<PlayerColumnarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerColumnarLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerColumnarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
