import { Component, OnInit } from '@angular/core';
import { UpdateConferenceService } from "./services/update.conferences.service"
import {StoreConferenceService} from "./services/store.conferences.service";
import {Conference} from "./model/conference";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Les conférences!';

  constructor(public updateConference: UpdateConferenceService, public  storeConference: StoreConferenceService) { }

  ngOnInit() {
    /*this.updateConference.getConferences().then(
      (conferences:Conference) => {
        this.storeConference.setConferences(conferences);
    });*/
    this.updateConference.getConferencesJson().subscribe(
        (conferences:Conference[]) => {
          console.log(conferences);
          this.storeConference.setConferences(conferences);
        },
        error => console.log(error)
    )

  }

}
