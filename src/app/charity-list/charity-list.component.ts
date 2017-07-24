import { Component,Input, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
  providers: [FirebaseService]
})
export class CharityListComponent implements OnInit {

  @Input() charities: any[];

  constructor(private firebase: FirebaseService) {

  }

  ngOnInit() {
  }

}
