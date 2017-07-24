import { Component,Input, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../firebase.service';
import { Charity } from '../charity.model';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
  providers: [ FirebaseService ]
})
export class CharityListComponent implements OnInit {
  title = 'givemo';
  favoriteCharities: FirebaseListObservable<any[]>;
  @Input() charities: any[];

  constructor(private firebase: FirebaseService) { }

  saveFavorite(ein: string, charityName: string, category: number, websiteURL: string, rating: number, tagLine: string, cause: string, financialRating: string, accountabilityRating: string) {
    let newCharity: Charity = new Charity(ein, charityName, category, websiteURL, rating, tagLine, cause, financialRating, accountabilityRating);
    this.firebase.addCharity(newCharity);
  }

  ngOnInit() {
  }

}
