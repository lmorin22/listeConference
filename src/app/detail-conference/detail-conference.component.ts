import { Component, OnInit, Input } from '@angular/core';
import {Conference} from "../model/conference";

@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.component.html',
  styleUrls: ['./detail-conference.component.css']
})
export class DetailConferenceComponent implements OnInit {


  @Input() conferenceSelected:Conference;

  constructor() { }

  ngOnInit() {
    console.log('detail');
    console.log(this.conferenceSelected);
  }

}
