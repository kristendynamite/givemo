import { Component,Input, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../firebase.service';
import { UserFavorite } from '../user-favorite.model';


@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
  providers: [ FirebaseService ]
})
export class CharityListComponent implements OnInit {
  title = 'givemo';
  show = false;
  donate = false;
  category = "";
  selectedCharity = null;
  // selectedDonate = null;

  @Input() charities: any[];
  @Input() favoriteCharities: any[];

  savedFavorites: any[] = [];


  constructor(private firebase: FirebaseService) { }

  saveFavorite(charityName: string) {
    let newUserFavorite: UserFavorite = new UserFavorite(charityName);
    this.firebase.addCharity(newUserFavorite);
  }

  // toggleSavedCharityIcon(favoritedCharity: string) {
  //   let newSavedCharities:
  // }

  showDetails(charity) {
    this.show = true;
    this.donate = false;
    this.selectedCharity = charity;
  }

  showDonate(charity) {
    this.show = false;
    this.donate = true;
    this.selectedCharity = charity;
  }



  ngOnInit() {

    // showCategory(category: string) {
    //   if (category === "1"){
    //     this.category = "Animal"
    //   }
    // };

  }

}
