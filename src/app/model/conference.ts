export class Conference{
  id : number;
  name: string;
  actor: string;

  constructor(theId: number, theName: string, theActor: string) {
    this.id = theId;
    this.name = theName;
    this.actor = theActor;
  }
}
