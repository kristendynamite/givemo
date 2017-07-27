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
   //this method does not work. the result comes back as false because when you subscribe it runs async so if returns false before it can complete the if statement.
   charityIsFavorited(charityMatch: string) {

     let result = false;
     const sub = this.favoriteCharities.subscribe(favorited => {
       for(let i =0; favorited.length > i; i++ ) {
         if(favorited[i].charityName == charityMatch){
           result = true;
         }
       }
     });

     sub.unsubscribe()
     console.log(result)

    return result;
   }

}
