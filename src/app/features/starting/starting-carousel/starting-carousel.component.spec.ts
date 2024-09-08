import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingCarouselComponent } from './starting-carousel.component';

describe('StartingCarouselComponent', () => {
  let component: StartingCarouselComponent;
  let fixture: ComponentFixture<StartingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartingCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
