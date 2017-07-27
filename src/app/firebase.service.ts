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
   getFavoriteCharities() {
     return this.favoriteCharities;
   }
   addCharity(newFavorite: UserFavorite) {
     this.favoriteCharities.push(newFavorite);
   }
   getCharityByName(favoritedCharityName: string) {
     return this.database.list(`/charities`, {
       query: {
         orderByChild: 'charityName',
         equalTo: favoritedCharityName
       }
     });
   }
   deleteCharity(selectedFavoriteCharity) {
     let savedCharity = this.getCharityById(selectedFavoriteCharity.$key);
     savedCharity.remove();

     this.getCharityByName(selectedFavoriteCharity.charityName).subscribe(data => {
       const charityKey: string = data[0].$key;
       this.getCharityFavoriteById(charityKey).set(false);
     });
   }
   //```````not working method yet ````````


   unFavorite(selectedFavoriteCharity) {
     let savedCharity = this.getCharityById(selectedFavoriteCharity.$key);
     savedCharity.remove();

     this.getCharityByName(selectedFavoriteCharity.charityName).subscribe(data => {
       const charityKey: string = data[0].$key;
       this.getCharityFavoriteById(charityKey).set(false);
     });
   }

   getCharityById(charityName:string){
     return this.database.object('favoriteCharities/' + charityName);
   }

   getCharityFavoriteById(favoritedId: string){
     return this.database.object('charities/' + favoritedId + '/favorited');
   }


}
