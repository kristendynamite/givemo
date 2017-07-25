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
  charities: any[] = [];
  // console.log(charities);


  constructor(private database: FirebaseService ) { }

  showCharities(categories: any[]) {
    this.charities = [];
    const checkedCategories = categories.filter(category => category.checked)
    const checkedCategoryValues = checkedCategories.map(category =>
    category.value)

    console.log(checkedCategoryValues)
    this.database.getCharities().subscribe(response =>{
      // this.charities = response;
      console.log(response)
      for (let i = 0; i < response.length; i++) {
        if (checkedCategoryValues.includes(response[i].category)) {
          this.charities.push(response[i]);
        }
      }
    });
  }

  // showCharityByName(name) {
  //   this.charities = [];
  //   console.log(this.charities);
  //
  //   const searchedCharityName = name.filter(names => names.charityName)
  //   const foundCharityName = searchedCharityName.map(names => names.charityName)
  //
  //   this.database.getCharities().subscribe(response =>{
  //     for (let i = 0; i < response.length; i++) {
  //       if (foundCharityName.includes(response[i].charityName)) {
  //        this.charities.push(response[i]);
  //        console.log(response);
  //       }
  //     }
  //   });
  // }

}
