import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'app-root-swiper1',
  providers: [],
  templateUrl: 'swiper1.component.html',
  styles: ['swiper1.component.css']
})
export class Swiper1Component implements AfterViewInit {

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  slides: Array<any>;
  swiper1SwipeOptions: any;

  constructor() {
    this.swiper1SwipeOptions = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false
    };

    this.slides = [
      { id: 0, image: '/assets/images/1620.jpg', caption: '1620' },
      { id: 1, image: '/assets/images/1619.jpg', caption: '1619' },
      { id: 2, image: '/assets/images/1618.jpg', caption: '1618' },
      { id: 3, image: '/assets/images/1605.jpg', caption: '1605' }
    ];
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
