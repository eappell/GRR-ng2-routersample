import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-home-slider',
  templateUrl: './home-slider.html',
  styles: ['./home-slider.css']
})
export class HomeSliderComponent implements OnInit {
  interval: number = 10000;
  wrap: boolean = true;
  keyboard: boolean = true;

  slides = [
    { id: 0, image: '/assets/images/1620.jpg', caption: '1620' },
    { id: 1, image: '/assets/images/1619.jpg', caption: '1619' },
    { id: 2, image: '/assets/images/1618.jpg', caption: '1618' },
    { id: 3, image: '/assets/images/1605.jpg', caption: '1605' }
  ];

  constructor() { }

  isActive(url: string) {
      return url === this.slides[0].image;
  }

  ngOnInit() { }
}
