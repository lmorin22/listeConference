import {Injectable} from "@angular/core";

@Injectable()
export class UpdateConferenceService {
  conferences:any[]=
      [{id:1,
      name:'Soyez un éditeur',
      actor: 'jojo'
    },{
        id:1,
        name:'Le pourquoi du comment',
        actor: 'jlues'
      }];

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
