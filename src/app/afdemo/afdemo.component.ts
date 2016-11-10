import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-afdemo',
  templateUrl: './afdemo.component.html',
  styleUrls: ['./afdemo.component.css']
})

export class AfdemoComponent implements OnInit {
  animals: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.animals = af.database.list('animals/');
  }

  ngOnInit() { }

}
