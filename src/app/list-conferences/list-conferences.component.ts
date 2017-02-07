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
  listconferences: Conference[];
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
  this.conferenceSelected = conference;
  }

  public onNavigate(conference) {
    console.log(conference);
    let navigationExtras: NavigationExtras = {
     queryParams: {
     "confId": conference.id
     }
     };
     this.router.navigate(["conferenceDetail"], navigationExtras);
  }

  public addConf() {

    //let ajoutConf: Conference = new Conference(3,"test1","nom1");

    let ajoutConf: Conference[] =
      [{
        id: 3,
        name: 'Nvo',
        actor: 'juju'
      }];

    this.storeConference.setConferences(ajoutConf);

  }


}
