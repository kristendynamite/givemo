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
  title = 'givemo';
  charities: any[] = null;
  // console.log(charities);

  constructor(private database: FirebaseService ) { }

  // showCharities(name: string) {
  //   this.database.getCharities().subscribe(response =>{
  //   return this.charities = response.json();
  //   });
  // }

  showAllCharities() {
    this.database.getCharities().subscribe(response =>{
    this.charities = response;
    });
  }

}
