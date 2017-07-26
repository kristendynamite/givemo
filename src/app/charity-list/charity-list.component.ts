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
  selectedCharity = null;
  @Input() charities: any[];
  favoriteCharities: FirebaseListObservable<any[]>;
  // savedFavorites: any[] = [];

  constructor(private firebase: FirebaseService) { }

  saveFavorite(charityName: string) {
    console.log(charityName);
    let newUserFavorite: UserFavorite = new UserFavorite(charityName);
    this.firebase.addCharity(newUserFavorite);
    console.log(newUserFavorite);
  }
  showDetails(charity) {
    this.show = true;
    this.selectedCharity = charity;
  }

  showCategory(category: string) {
    if (category === "1"){
      category = "animal"
    }
  }

  // addFavorite(charityName: any[]) {
  //   this.savedFavorites = [];
  //   const addedFavorite = charityName.filter(name => )
  // }
  //
  // determineClicked(item) {
  //   for(var i = 0; i <= favoriteCharities.length; i++) {
  //     if ()
  //   }
  // }

  ngOnInit() {
  }

}
