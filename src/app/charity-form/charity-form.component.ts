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

  constructor(private database: FirebaseService ) { }

  showCharities(categories: any[]) {
    this.charities = [];
    const checkedCategories = categories.filter(category => category.checked)
    const checkedCategoryValues = checkedCategories.map(category =>
    category.value)

    console.log(checkedCategoryValues)
    this.database.getCharities().subscribe(response =>{
      for (let i = 0; i < response.length; i++) {
        if (checkedCategoryValues.includes(response[i].category)) {
          this.charities.push(response[i]);
        }
      }
    });
  }

  showCharityByName(searchTerm) {
    this.charities = [];
    this.database.getCharities().subscribe(response =>{
      for (let i = 0; i < response.length; i++) {
        if (response[i].charityName.toLowerCase().includes(searchTerm.toLowerCase())) {
         this.charities.push(response[i]);
        }
      }
    });
  }

}
