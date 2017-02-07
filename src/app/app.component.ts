import { Component, OnInit } from '@angular/core';
import { UpdateConferenceService } from "./services/update.conferences.service"
import {StoreConferenceService} from "./services/store.conferences.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Les conférences!';

  constructor(public updateConference: UpdateConferenceService, public  storeConference: StoreConferenceService) { }

  ngOnInit() {
    this.updateConference.getConferences().then(
      (conferences) => {
        console.log(conferences);
        console.log(typeof conferences);
        this.storeConference.setConferences(conferences);
    });

  }

}
