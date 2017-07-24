// import { GUIDESTAR_API_KEY } from './api-keys';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Http, Response, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CharityListApiService {

  charities: FirebaseListObservable<any[]>;

  constructor(private http: Http, private database: AngularFireDatabase) {
    this.charities = database.list(charities)
  }

  // getCharities(name: string ) {
  //   let headers = new Headers();
  //   headers.append('username', GUIDESTAR_API_KEY);
  //   console.log(headers);
  //   let options = new RequestOptions({headers: headers});
  //   console.log(options);
  //   return this.http.get(`https://Sandboxdata.guidestar.org/v1_1/search?q=state:or`,  options )
  // }
  getCharities(){
    return this.charities;
  }

}
