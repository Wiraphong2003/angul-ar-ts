import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/service/appdata.service';
import jsonData from '../../../assets/landmark.json'
@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss']
})
export class LandmarksComponent {
  landmarks = jsonData;
  landmark : any;
  countrySet = new Set<string>();
  countries: any;
  country = '';
  landmaeksByCountry = new Array<any>();

  isMultiple =false;
  constructor(private router : Router ,private data : AppdataService){
    console.log(jsonData)
    this.landmark = this.landmarks[0]
    this.landmarks.forEach(Element => {
      this.countrySet.add(Element.country);
    });
    this.countries = Array.from(this.countrySet);
    console.log(this.countries);
  }
  selectCountry(selectedLandmark: any){{
    this.data.landmark = selectedLandmark;
    this.router.navigateByUrl('/show');
  }}

  searchByContry(){
    this.isMultiple = true;
    this.landmaeksByCountry = new Array<any>();
    this.landmarks.forEach(Element => {
      if(Element.country == this.country){
        this.landmaeksByCountry.push(Element)
      }
    });
    this.landmark = this.landmaeksByCountry[0];
  }

  Search(id:any){
    
    for(let index = 0; index < this.landmarks.length; index++){
      if(this.landmarks[index].idx == id){
        
        this.landmark = this.landmarks[index];
        break;
      }
    }
  }
}
