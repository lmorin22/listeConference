import {Injectable} from "@angular/core";
import {Conference} from "../model/conference";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http, Response} from "@angular/http";

@Injectable()
export class UpdateConferenceService {
  // Mode en dur
  // conferences=new Conference(1,'soyez éditeur', 'jojo');
  getConferences() {
    let conferences: Conference[] =
      [{
        id: 1,
        name: 'Soyez un éditeur',
        actor: 'jojo'
      }, {
        id: 2,
        name: 'Le pourquoi du comment',
        actor: 'jlues'
      }];
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(conferences);
      }, 2000);
    });

    return promise;
  }


  constructor (private http:Http){}
  //appel json
  //getConferences(): Observable<Conference[]> {
  getConferencesJson(): Observable<any> {
    let pathJson = "data/conferences.json";
    return this.http.get(pathJson)
      .map((res:Response)=>{
      console.log(res.json().conference);
      return res.json().conference;})
      .catch((err)=>Observable.throw("erreur :" + err))

  }

  getConferenceById(id:number) {
    return this.getConferences()
      //ko .then((conferences: Conference[]) => {conferences.find(conference => conference.id === 1);
      .then((conferences: Conference[]) => conferences.filter(conference => conference.id === id)[0]);
   }


}
