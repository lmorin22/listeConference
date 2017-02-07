import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StoreConferenceService {
  private conferenceSource = new BehaviorSubject<any>([]);

  conference$ = this.conferenceSource.asObservable();

  setConferences(conference: any){
    this.conferenceSource.next(conference);
  }


}
