import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics.service';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import { MatDialog } from '@angular/material/dialog';
import { ComicViewComponent } from '../comic-view/comic-view.component';

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
  constructor(public service: ComicsService, public dialog: MatDialog) { }

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
    console.log(event);
    this.dialog.open(ComicViewComponent, {
      data: {
        title: event.title,
        image: event.thumbnail.path + '.' + event.thumbnail.extension,
        authors: event.creators.items
      }
    });
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
    breakpoints:{ 600: { slidesPerView: 3}, 1000:{slidesPerView: 5}, 300:{ slidesPerView: 1}
    }
  };

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }
}
