import { Component, OnInit, Input } from '@angular/core';
import {Conference} from "../model/conference";
import {ActivatedRoute} from "@angular/router";
import {UpdateConferenceService} from "../services/update.conferences.service";

@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.css']
})
export class DetailConferenceComponent implements OnInit {

  /*mode input*/
  @Input() conferenceSelected:Conference;

  constructor(public params: ActivatedRoute, public updateConference: UpdateConferenceService) { }


  ngOnInit() {
    /*en mode navigate*/

    let confId:any;


    var test: Conference;

    this.params.queryParams.subscribe(observable=> confId = observable);

    console.log('detail');
    console.log(confId);



    this.updateConference.getConferenceById(confId).then(
      (conferences:any) => {this.conferenceSelected = conferences;}
    )



    //this.conferenceSelected = test.conf;
    /*fin mode navigate*/
  }

}
