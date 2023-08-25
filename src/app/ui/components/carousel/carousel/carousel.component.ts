import { Component, ElementRef, ViewChild } from '@angular/core';
import { CharacterData } from 'src/app/models';
import Swiper from 'swiper';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: CharacterData[] = new Array(3).fill({ id: -1, src: '', title: '', description: '' });

  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '/assets/images/innocent-buu.png',
      title: "Innocent Buu",
      description: 'The first form of Buu to appear on-screen, and the result of Kid Buu absorbing the Grand Supreme Kai',
    };
    this.slides[1] = {
      id: 1,
      src: '/assets/images/super-buu.png',
      title: "Super Buu",
      description: "The result of Evil Buu absorbing Good Buu. He is the same overall entity as Innocent Buu, however he looks and acts completely different due to Buu's evil resurfacing and overcoming the Grand Supreme Kai's positive influence",
    };
    this.slides[2] = {
      id: 2,
      src: '/assets/images/kid-buu.png',
      title: "Kid Buu",
      description: 'The original and pure form of Majin Buu'
    };
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onActiveIndexChanged() {
    this.currentIndex = this.swiper?.activeIndex ?? 0;
  }

  prev() {
    this.swiper?.slideTo(this.currentIndex - 1);

  }

  next() {
    this.swiper?.slideTo(this.currentIndex + 1);
  }

  slideTo(index: number) {
    console.log(this.swiper);
    this.swiper?.slideTo(index);
  }
}
