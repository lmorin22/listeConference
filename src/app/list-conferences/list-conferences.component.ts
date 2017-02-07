import { Component, OnInit, OnDestroy } from '@angular/core';
import {StoreConferenceService} from "../services/store.conferences.service";
import {Subscription} from "rxjs/Subscription"
import {NavigationExtras, Router} from "@angular/router";
import {Conference} from "../model/conference";

@Component({
  selector: 'app-list-conferences',
  templateUrl: './list-conferences.component.html',
  styleUrls: ['./list-conferences.component.css']
})
export class ListConferencesComponent implements OnInit, OnDestroy {
  listconferences: any[];
  conferenceSelected: Conference;
  conferenceSubscription: Subscription;
  constructor(public storeConference: StoreConferenceService, public router:Router) { }

  ngOnInit() {
    this.conferenceSubscription = this.storeConference.conference$.subscribe( observable=> this.listconferences = observable);
    console.log(this.listconferences);
  }

  ngOnDestroy(){
    console.log('destroy me')
    this.conferenceSubscription.unsubscribe();
  }

  public onTap(conference) {
    console.log(conference);

    /*let navigationExtras: NavigationExtras = {
      queryParams: {
        "conf": conference
      }
    };
    this.router.navigate(["DetailConferenceComponent"], navigationExtras);
    */
    this.conferenceSelected = conference;

  }


}
