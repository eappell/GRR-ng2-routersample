import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasonryModule, MasonryOptions } from 'angular2-masonry';
import { KSSwiperModule } from 'angular2-swiper';
import { MomentModule } from 'angular2-moment';

// PIPES
import { TruncatePipe } from '../shared/truncate';
import { OrderByPipe } from '../shared/orderBy.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KSSwiperModule,
    MomentModule,
    MasonryModule
  ],
  declarations: [ TruncatePipe, OrderByPipe ],
  exports: [
    FormsModule,
    CommonModule,
    MomentModule,
    KSSwiperModule,
    MasonryModule,
    TruncatePipe,
    OrderByPipe
  ]
})
export class SharedModule {}
