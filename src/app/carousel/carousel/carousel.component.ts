import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/655491b7-451e-4010-8f27-2a8539ed27a2/d58wvuw-408f1d29-7e8f-4828-a9f3-9884edd418de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NTQ5MWI3LTQ1MWUtNDAxMC04ZjI3LTJhODUzOWVkMjdhMlwvZDU4d3Z1dy00MDhmMWQyOS03ZThmLTQ4MjgtYTlmMy05ODg0ZWRkNDE4ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlSoqBUBSnrXmrReC1SH7IYwb_DJFqCE5RoqcCX573k',
    };
    this.slides[1] = {
      src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5cae529-9f19-4f93-8f84-42c8a66e011a/de5r7zn-27fb5d53-c8d5-4e93-93ee-b27a973f9ef4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1Y2FlNTI5LTlmMTktNGY5My04Zjg0LTQyYzhhNjZlMDExYVwvZGU1cjd6bi0yN2ZiNWQ1My1jOGQ1LTRlOTMtOTNlZS1iMjdhOTczZjllZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1OKXkNeEuJPgvz3JEvVIR3yZz2tMv9xr3hDQIn2Yg4s',
    };
    this.slides[2] = {
      src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c21bd9d4-72b2-4650-b6c3-c2b075bdc423/db5tq3n-5fbfdfb0-6720-4946-bf36-2b4b52661da4.png/v1/fill/w_1024,h_2233/kid_buu_by_gokusupremo15_db5tq3n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjIzMyIsInBhdGgiOiJcL2ZcL2MyMWJkOWQ0LTcyYjItNDY1MC1iNmMzLWMyYjA3NWJkYzQyM1wvZGI1dHEzbi01ZmJmZGZiMC02NzIwLTQ5NDYtYmYzNi0yYjRiNTI2NjFkYTQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2g-ylWJgAEiL8kTpiCvf8Q0VBiP3KJEWlgxtodNbJio',
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
    this.swiper?.slideTo(index);
  }
}
