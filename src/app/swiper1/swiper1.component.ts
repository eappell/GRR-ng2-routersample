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
      loop: true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false
    };

    this.slides = [
      { id: 1, image: 'assets/images/slider/scarletfire003.jpg', caption: '1620' },
      { id: 2, image: 'assets/images/slider/lucille001.jpg', caption: '1620' },
      { id: 3, image: 'assets/images/slider/GRR1605.jpg', caption: '1620' },
      { id: 4, image: 'assets/images/slider/GRR1614.jpg', caption: '1620' },
      { id: 5, image: 'assets/images/slider/GRR1616.jpg', caption: '1620' },
      { id: 6, image: 'assets/images/slider/GRR1620.jpg', caption: '1620' },
      { id: 7, image: 'assets/images/slider/GRR1410a.jpg', caption: '1620' },
      { id: 8, image: 'assets/images/slider/scarletfire001.jpg', caption: '1620' },
      { id: 9, image: 'assets/images/slider/sunshineDaydream01.jpg', caption: '1620' },
      { id: 10, image: 'assets/images/slider/GRR1410b.jpg', caption: '1620' },
      { id: 11, image: 'assets/images/slider/GRR1412b.jpg', caption: '1620' },
      { id: 12, image: 'assets/images/slider/GRR1404b.jpg', caption: '1620' },
      { id: 13, image: 'assets/images/slider/dynamohum001.jpg', caption: '1620' },
      { id: 14, image: 'assets/images/slider/GRR1402a.jpg', caption: '1620' },
      { id: 15, image: 'assets/images/slider/Ziggy003.jpg', caption: '1620' },
      { id: 16, image: 'assets/images/slider/dynamohum002.jpg', caption: '1620' }
    ];
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
