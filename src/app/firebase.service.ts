import { masterFirebaseConfig } from './api-keys';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Http, Response, } from '@angular/http';
import { Charity } from './charity.model';
import { UserFavorite } from './user-favorite.model';

@Injectable()
export class FirebaseService {

  charities: FirebaseListObservable<any[]>;
  favoriteCharities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.charities = database.list('charities');
    this.favoriteCharities = database.list('favoriteCharities');
   }

   getCharities(){
     return this.charities;
   }

   getFavoriteCharities(){
     return this.favoriteCharities;
   }

   addCharity(newFavorite: UserFavorite) {
     this.favoriteCharities.push(newFavorite);
   }

   deleteCharity(selectedFavoriteCharity) {
     let savedCharity = this.getCharityById(selectedFavoriteCharity.$key);
     savedCharity.remove();
   }

   getCharityById(charityId:string){
     return this.database.object('favoriteCharities/' + charityId);
   }
}
