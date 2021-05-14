import { Component, OnInit } from '@angular/core';
import {Appearance, GermanAddress, Location} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import {Title} from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public form: FormGroup;
  
  constructor(private titleService: Title, private fb: FormBuilder, public dialogRef: MatDialogRef<MapViewComponent>,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createForm();
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;
    this.latitude = -8.0631633;
    this.longitude = -34.8711337;

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
    this.form.get('address').setValue(result.address_components);
    this.form.get('formatedAddress').setValue(result.formatted_address);

  }

  onLocationSelected(location: Location) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.zoom = 15;
  }


  createForm(){
    this.form = this.fb.group({
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      age: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      cpf: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      agm: new FormControl(null,[Validators.required, Validators.maxLength(10)]),
      address: new FormControl(''),
      formatedAddress: new FormControl('')
    })
  }

  onSubmit(){
    this.onClose();
    this.openSnackBar();
  }

  onClose(){
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.open('Quadrinho encomendado com sucesso!','Fechar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }

}