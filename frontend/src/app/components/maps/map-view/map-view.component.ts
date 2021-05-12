import { Component, OnInit } from '@angular/core';
import {Appearance, GermanAddress, Location} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;
    this.latitude = -8.1688884;
    this.longitude = -34.9281449;

    this.setCurrentPosition();

  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.zoom = 15;
  }

  onGermanAddressMapped($event) {
    console.log('onGermanAddressMapped', $event);
  }

}