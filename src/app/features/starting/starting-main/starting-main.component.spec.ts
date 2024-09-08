import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingMainComponent } from './starting-main.component';

describe('StartingMainComponent', () => {
  let component: StartingMainComponent;
  let fixture: ComponentFixture<StartingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartingMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
