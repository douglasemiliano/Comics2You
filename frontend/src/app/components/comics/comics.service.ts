import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

 PUBLIC_KEY = 'f26c221e36c1c508289724a215452a71';
 HASH = '5617a3f28f027cfb55f0406503066686';
 URL_API = `https://gateway.marvel.com:443/v1/public/comics?limit=50&offset=100&ts=1620686549&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;



 constructor(private http: HttpClient) { }


  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }

  listarQuadrinhos(): Observable<any>{
  return this.http.get<any>(this.URL_API);
  }
  
}