import {Injectable} from "@angular/core";
import {Conference} from "../model/conference";

@Injectable()
export class UpdateConferenceService {
  conferences:Conference[]=
    [{id:1,
      name:'Soyez un éditeur',
      actor: 'jojo'
    },{
      id:1,
      name:'Le pourquoi du comment',
      actor: 'jlues'
    }];
 // conferences=new Conference(1,'soyez éditeur', 'jojo');

  getConferences(){
    let promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('passela0');
        resolve(this.conferences);
      },2000);
    });

    return promise;


  }

}
