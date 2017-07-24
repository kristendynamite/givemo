import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ AuthenticationService ]
})
export class ProfileComponent implements OnInit {
  title = 'givemo';
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  private userPhoto: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        console.log(user);
        this.userName = user.displayName;
        this.userPhoto = user.photoURL;
        console.log(user.photoURL);
        this.router.navigate([]);
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
