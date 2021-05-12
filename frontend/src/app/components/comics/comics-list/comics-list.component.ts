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
   /* this.print({id: 94483, title: "Fantastic Four (2018) #32 (Variant)", issueNumber: 32, path: "Variant", thumbnail:{path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/6092ed44c99a8', extension:'jpg'}, creators:{items: [{resourceURI: "http://gateway.marvel.com/v1/public/creators/11482", name: "Jesus Aburtov", role: "colorist"},
     {resourceURI: "http://gateway.marvel.com/v1/public/creators/5251", name: "Vc Joe Caramagna", role: "letterer"},
     {resourceURI: "http://gateway.marvel.com/v1/public/creators/13127", name: "Emily Newcomen", role: "editor"},
     {resourceURI: "http://gateway.marvel.com/v1/public/creators/12489", name: "R.B. Silva", role: "inker"},
     {resourceURI: "http://gateway.marvel.com/v1/public/creators/12983", name: "Dan Slott", role: "writer"},
     {resourceURI: "http://gateway.marvel.com/v1/public/creators/7190", name: "Skottie Young", role: "painter (cover)"}]},
    prices: [{price: 3.99}]})*/
  }

  getCharacters() {
    this.service.listarQuadrinhos().subscribe(data => {
      this.allCharacters = data.data.results;
    });
  }

  print(event){
    console.log(event);
    this.dialog.open(ComicViewComponent, {
      data: {
        title: event.title,
        image: event.thumbnail.path + '.' + event.thumbnail.extension,
        authors: event.creators.items,
        description: event.description,
        pageCount: event.pageCount,
        prices: event.prices
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
    pagination: false,
    breakpoints:{ 600: { slidesPerView: 3}, 1000:{slidesPerView: 4}, 200:{ slidesPerView: 1}, 1440:{slidesPerView: 5}
    }
  };

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }
}
