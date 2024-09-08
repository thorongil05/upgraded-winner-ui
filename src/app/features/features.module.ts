import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartingCarouselComponent } from './starting/starting-carousel/starting-carousel.component';
import { StartingModule } from './starting/starting.module';

@NgModule({
  declarations: [StartingCarouselComponent],
  imports: [CommonModule, StartingModule],
  exports: [StartingCarouselComponent],
})
export class FeaturesModule {}
