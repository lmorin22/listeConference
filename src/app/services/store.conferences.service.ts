import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Conference} from "../model/conference";

@Injectable()
export class StoreConferenceService {
  private conferenceSource = new BehaviorSubject<any>([]);

  conference$ = this.conferenceSource.asObservable();

  setConferences(conference: Conference[]){
    this.conferenceSource.next(conference);
  }


  addConferences(conference: Conference) {
    let arrConferences:Conference[] = this.conferenceSource.getValue();
    arrConferences.push(conference);
    this.conferenceSource.next(arrConferences);
  }

  removeConferences(conferenceId: number) {
    let arrConferences:Conference[] = this.conferenceSource.getValue();
    arrConferences = arrConferences.filter(item => item.id !== conferenceId);
    this.conferenceSource.next(arrConferences);
  }


}
