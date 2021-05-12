import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comic-view',
  templateUrl: './comic-view.component.html',
  styleUrls: ['./comic-view.component.css']
})
export class ComicViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.description)
;  }

  getAuthors(){
    let authors: string = '';
    for (let i = 0; i < this.data.authors.length; i++){
      authors += this.data.authors[i].name;
      if(i + 1 == this.data.authors.length){
        authors += '.'
      } else {
        authors += ', '
      }
    }
    return authors;
  }

}
