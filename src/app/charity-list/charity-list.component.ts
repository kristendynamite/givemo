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
  category = "";
  selectedCharity = null;

  // charities = null;
  @Input() charities: any[];
  @Input() favoriteCharities: any[];

  constructor(private firebase: FirebaseService) {

  }

  saveFavorite(charity: any) {


    let newUserFavorite: UserFavorite = new UserFavorite(charity.charityName);
    this.firebase.addCharity(newUserFavorite);
    this.firebase.getCharityFavoriteById(charity.$key).set(true)

    console.log(newUserFavorite);
    console.log(this.favoriteCharities);
  }

  // unFavorite(selectedFavoriteCharity: UserFavorite) {
  //   this.firebase.unFavorite(selectedFavoriteCharity);
  // }

  showDetails(charity) {
    this.show = true;
    this.selectedCharity = charity;
  }

  ngOnInit() {
  }

}
