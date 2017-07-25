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

  @Input() charities: any[];

  constructor(private firebase: FirebaseService) { }

  saveFavorite(charityName: string) {
    console.log(charityName);
    let newUserFavorite: UserFavorite = new UserFavorite(charityName);
    this.firebase.addCharity(newUserFavorite);
    console.log(newUserFavorite);
  }

  ngOnInit() {
  }

}
