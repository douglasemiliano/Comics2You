import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  
  allCharacters: any[];
  
  constructor(public service: ComicsService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.service.listarQuadrinhos().subscribe(data => {
      this.allCharacters = data.data.results;
      console.log(this.allCharacters);
    });
  }

  print(){
    console.log(this.allCharacters[0])
  }
}
