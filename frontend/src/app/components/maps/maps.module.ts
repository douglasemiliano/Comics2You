import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './map-view/map-view.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [MapViewComponent],
  imports: [
    CommonModule,
    MatGoogleMapsAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      //insert your google cloud platform API
      apiKey:'',
      libraries: ['places']
    }),
  ],
  exports:[MapViewComponent]
})
export class MapsModule { }
