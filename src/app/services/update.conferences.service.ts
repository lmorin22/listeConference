import {Injectable} from "@angular/core";
import {Conference} from "../model/conference";

@Injectable()
export class UpdateConferenceService {
  conferences: Conference[] =
    [{
      id: 1,
      name: 'Soyez un éditeur',
      actor: 'jojo'
    }, {
      id: 2,
      name: 'Le pourquoi du comment',
      actor: 'jlues'
    }];
  // conferences=new Conference(1,'soyez éditeur', 'jojo');

  getConferences() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.conferences);
      }, 2000);
    });

    return promise;
  }

  getConferenceById(id:number) {
    console.log(id);
    return this.getConferences()
      //.then((conferences: Conference[]) => {conferences.find(conference => conference.id === 1);
      .then((conferences: Conference[]) => conferences.filter(conference => conference.id === id)[0]);
   }


}
