import { Component, OnInit, OnDestroy } from '@angular/core';
import {StoreConferenceService} from "../services/store.conferences.service";
import {Subscription} from "rxjs/Subscription"

@Component({
  selector: 'app-list-conferences',
  templateUrl: './list-conferences.component.html',
  styleUrls: ['./list-conferences.component.css']
})
export class ListConferencesComponent implements OnInit, OnDestroy {
  listconferences: any[];
  conferenceSubscription: Subscription;
  constructor(public storeConference: StoreConferenceService) { }

  ngOnInit() {
    this.conferenceSubscription = this.storeConference.conference$.subscribe( observable=> this.listconferences = observable);
    console.log(this.listconferences);
  }

  ngOnDestroy(){
    console.log('destroy')
    this.conferenceSubscription.unsubscribe();
  }

}
