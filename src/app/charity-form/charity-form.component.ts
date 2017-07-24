import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-charity-form',
  templateUrl: './charity-form.component.html',
  styleUrls: ['./charity-form.component.scss'],
  providers: [FirebaseService]
})
export class CharityFormComponent {

  charities: any[];

  constructor(private database: FirebaseService ) { }

  showCharities(name: string) {
    this.database.getCharities().subscribe(response =>{
    //return this.charities = response.json();
    });
  }

  // constructor(private charityApi: CharityListApiService) { }

  // showCharities(name: string) {
  //   this.charityApi.getCharities(name).subscribe(response =>{
  //   return this.charities = response.json();
  //   });


}
