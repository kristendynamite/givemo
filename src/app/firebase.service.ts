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

   addCharity(newFavorite: UserFavorite) {
     this.favoriteCharities.push(newFavorite);
   }
}
