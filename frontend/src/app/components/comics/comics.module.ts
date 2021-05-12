import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ComicViewComponent } from './comic-view/comic-view.component';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [ComicsListComponent, ComicViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SwiperModule,
    MatDialogModule,
  ],
  exports: [ComicsListComponent, ComicViewComponent],
  providers:[
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class ComicsModule { }
