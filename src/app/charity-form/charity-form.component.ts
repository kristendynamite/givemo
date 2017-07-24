import { Component } from '@angular/core';

import { CharityListApiService } from '../charity-list-api-service.service';






@Component({
  selector: 'app-charity-form',
  templateUrl: './charity-form.component.html',
  styleUrls: ['./charity-form.component.scss'],
  providers: [CharityListApiService]
})
export class CharityFormComponent {



  constructor(private charityApi: CharityListApiService) { }
  charities:
  showCharities(name: string) {
    this.charityApi.getCharities(name).subscribe(response =>{
    return this.charities = response.json();
    });

  // charities: any[]=null;
  // constructor(private charityApi: CharityListApiService) { }

  // showCharities(name: string) {
  //   this.charityApi.getCharities(name).subscribe(response =>{
  //   return this.charities = response.json();
  //   });


}
