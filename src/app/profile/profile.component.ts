import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../firebase.service';
import { UserFavorite } from '../user-favorite.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ AuthenticationService, FirebaseService ]
})
export class ProfileComponent implements OnInit {
  title = 'givemo';
  show = false;
  donate = false;
  selectedCharity = null;
  // favoriteCharities: any[] = [];

  savedCharities: FirebaseListObservable <any[]> = null;

  user;
  private isLoggedIn: Boolean;
  private userName: String;
  private userPhoto: String;

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private database: FirebaseService) {

    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.userPhoto = user.photoURL;
        this.router.navigate([]);
      }
    });
  }

  // showFavoriteCharities() {
  //   this.favoriteCharities = [];
  //   this.database.getFavoriteCharities().subscribe(response =>{
  //   this.favoriteCharities = response;
  //   })
  // }

  showDonate(charity) {
    this.show = false;
    this.donate = true;
    this.selectedCharity = charity;
  }

  ngOnInit() {
    this.savedCharities = this.database.getFavoriteCharities();
    console.log(this.savedCharities);
  }

  deleteCharity(selectedFavoriteCharity: UserFavorite) {
    this.database.deleteCharity(selectedFavoriteCharity);
    // alert("This charity has been deleted from your list of saved favorites.");
  }


  logout() {
    this.authService.logout();
  }

}
