import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics.service';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  
  allCharacters: any[];
  slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];
  constructor(public service: ComicsService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.service.listarQuadrinhos().subscribe(data => {
      this.allCharacters = data.data.results;
      console.log(this.allCharacters.length);
    });
  }

  print(event){
    console.log(event)
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  public config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
  };

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }
}
