import { Component, OnInit, Input } from '@angular/core';
import {Conference} from "../model/conference";
import {ActivatedRoute} from "@angular/router";
import {UpdateConferenceService} from "../services/update.conferences.service";
import { Location }  from '@angular/common';

@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.css']
})
export class DetailConferenceComponent implements OnInit {

  /*mode input*/
  @Input() conferenceSelected:Conference;

  constructor(public params: ActivatedRoute, public updateConference: UpdateConferenceService, private location: Location) { }


  ngOnInit() {
    /*en mode navigate*/

    let confId:any;


    var test: Conference;

    this.params.queryParams.subscribe(observable=> confId = observable);
    this.updateConference.getConferenceById(confId.confId).then(
  //  this.updateConference.getConferenceById(1).then(
      (conferences:any) => {
        console.log(conferences);
        this.conferenceSelected = conferences;}
    )


    //this.conferenceSelected = test.conf;
    /*fin mode navigate*/
  }

  goBack(): void {
    this.location.back();
  }

}
