import { masterFirebaseConfig } from './api-keys';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Http, Response, } from '@angular/http';

@Injectable()
export class FirebaseService {

  charities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.charities = database.list('charities');
   }

   getCharities(){
     return this.charities;
   }
}
