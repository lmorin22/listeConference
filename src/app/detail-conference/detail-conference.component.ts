import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Conference} from "../model/conference";
import {ActivatedRoute} from "@angular/router";
import {UpdateConferenceService} from "../services/update.conferences.service";
import { Location }  from '@angular/common';
import {Subscription} from "rxjs";
import { StoreConferenceService } from '../services/store.conferences.service';

@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.css']
})
export class DetailConferenceComponent implements OnInit, OnDestroy {

  /*mode input*/
  @Input() conferenceSelected: Conference;

  conferenceIdSubscription: Subscription;
  conferencesSubscription: Subscription;
  //conferences: Conference[];

  constructor(
    public params: ActivatedRoute,
    public updateConference: UpdateConferenceService,
    private location: Location,
    private store: StoreConferenceService
  ) { }


  ngOnInit() {




    /*mode naivagte*/
    let confId:any;
    let conferences: Conference[];
    this.conferenceIdSubscription = this.params.queryParams.subscribe(observable => confId = observable);


    this.conferencesSubscription = this.store.conference$.subscribe(
      observable => {
        conferences = observable;

        console.log(conferences);
        this.conferenceSelected = conferences.find(conference => conference.id == confId.confId);
        console.log(this.conferenceSelected);
      }
    );



    /*
    this.updateConference.getConferenceById(Number(confId.confId)).then(
    //this.updateConference.getConferenceById(2).then(
      (conferences:any) => {
        console.log(conferences);
        this.conferenceSelected = conferences;}
    )
    */
  }

  ngOnDestroy(){
    console.log('destroy conferenceidsub');
    this.conferenceIdSubscription.unsubscribe();
    this.conferencesSubscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
