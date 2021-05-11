import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';



@NgModule({
  declarations: [ComicsListComponent],
  imports: [
    CommonModule
  ],
  exports: [ComicsListComponent]
})
export class ComicsModule { }
