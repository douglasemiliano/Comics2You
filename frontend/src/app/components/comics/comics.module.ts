import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ComicsListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ComicsListComponent]
})
export class ComicsModule { }
