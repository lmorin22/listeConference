import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Conference} from "../model/conference";

@Injectable()
export class StoreConferenceService {
  private conferenceSource = new BehaviorSubject<any>([]);

  conference$ = this.conferenceSource.asObservable();

  setConferences(conference: Conference){
    this.conferenceSource.next(conference);
  }




}
