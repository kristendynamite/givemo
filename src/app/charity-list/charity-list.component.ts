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

  @Input() charities: any[];
  @Input() favoriteCharities: any[];

  // favoriteCharities: FirebaseListObservable<any[]>;
  savedFavorites: any[] = [];


  constructor(private firebase: FirebaseService) { }

  saveFavorite(charityName: string) {
    console.log(charityName);

    let newUserFavorite: UserFavorite = new UserFavorite(charityName);
    this.firebase.addCharity(newUserFavorite);
    
    console.log(newUserFavorite);
    console.log(this.favoriteCharities);
  }

  // toggleSavedCharityIcon(favoritedCharity: string) {
  //   let newSavedCharities:
  // }

  showDetails(charity) {
    this.show = true;
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
