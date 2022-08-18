import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../User';
import { Router } from '@angular/router';
import {Event} from 'src/app/Event'
import { EventsService } from './events.service';
import {Invite} from 'src/app/Invite'


@Injectable({
  providedIn: 'root'
})
export class UIService {
// keep track of events---- subjects

showCreateEventSubject: Subject<boolean> = new Subject()
eventsSubject: Subject<Event[]> = new Subject()

showCreateInviteSubject: Subject<boolean> = new Subject()
invitesSubject: Subject<Invite[]> = new Subject()

private nextID: number=0
events: Event[] = []

invites: Invite[]=[]

editSubject: Subject<number | undefined> = new Subject()
userSubject: Subject<string | undefined> = new Subject()
username: string | undefined
userID: number | undefined

  constructor(private usersService: UsersService,
              private eventsService: EventsService,
              private _router: Router) { }


// actions that happens to the app
dummyEventsUpdate(){
  this.eventsSubject.next(this.events)
}

whenEventsListUpdated(): Observable<Event[]>{
  return this.eventsSubject.asObservable()
}



//  ---- create an invite
startAddInvite(): void{
  this.showCreateInviteSubject.next(true)  
}

whenAddInviteStarted(): Observable<boolean>{
  return this.showCreateInviteSubject.asObservable()  
}


applyCreateInviteHappened(eventTitle: string, eventDate: Date, eventDescrip: string): void{
  const newInvite:Invite= {
    id: this.nextID,
    fromUserID: this.userID,
    fromUsername: this.username,
    eventDate,
    eventTitle,
    eventDescrip
  }

   this.eventsService.postNewInvite(newInvite).subscribe(() => {this.showCreateInviteSubject.next(false)
    
   })

}



// ---- adding/ cancel adding an event  ---------------------------------------------------

startAddEvent(): void{
  // service transitions the state to true
  this.showCreateEventSubject.next(true)  // want it to be true when clicked
}

// event triggered from startAddEvent
whenAddEventStarted(): Observable<boolean>{
  return this.showCreateEventSubject.asObservable()  // needs to be listened by the parent component (events)
}


cancelAddEvent(): void{
  // transition state to False (do not show)
  this.showCreateEventSubject.next(false)
}

// notify the observable that the even occured

applyCreateEventHappened(eventTitle: string, eventDate: Date, eventDescrip: string): void{
  const newEvent:Event= {
    //id: ++this.nextID, do not need b/c it is handled by the backend
    id: this.nextID,
    userID: this.userID,
    username: this.username,
    createdOn: new Date,
    eventDate,
    eventTitle,
    eventDescrip
  }

   this.eventsService.postNewEvent(newEvent).subscribe(() => {
    this.refreshEvents() 
    this.showCreateEventSubject.next(false)
    
   })

  //this.events.push(newEvent) ---  handle in the backend now
  //this.eventsSubject.next(this.events)
  //
// triggers in the onApply
}

// events that can be triggered as a result of the actions in the app
// the rest of the app want to listen to

// --------- delete an event ------------------------------------------------------------------------------

deleteEventHappened(id: number): void{
this.eventsService.deleteEvent(id).subscribe(() => {
  this.refreshEvents() })

 //this.events = this.events.filter(event => event.id !== id)

 //this.eventsSubject.next(this.events) // notify everybody that is interested

}

// --------- edit an event ------------------------------------------------------------------------------


startEditEvent(id: number): void{
  this.editSubject.next(id)
}

whenStartEditHappened(): Observable<number | undefined>{
return this.editSubject.asObservable()
}

cancelEditEvent(): void{
  this.editSubject.next(undefined)
}

applyEditEvent(id: number, eventTitle: string, eventDate: Date, eventDescrip: string ): void{
  const eventToEdit: Event = {
    id: this.nextID,
    userID: this.userID,
    username: this.username,
    createdOn: new Date,
    eventTitle,
    eventDate,
    eventDescrip
  }
 this.eventsService.editEvent(id, eventToEdit).subscribe(() => {
  this.refreshEvents()})
  this.editSubject.next(undefined)
}
//   else
//     console.log('id not found, cannot edit this event')
// }

//   -------login and registration  -----------------------------------------------------------------------------------

  dummyUsernameUpdate(): void{   // 5. try tu update the userSubject
    this.userSubject.next(this.username)
  }

  // this.events = this.events.filter(event => event.id !== id)

private refreshEvents(): void{
  if (this.userID !== undefined)
  this.eventsService.getEventsByUserId(this.userID).subscribe(events => {
    this.eventsSubject.next(events)

  })
}
  attemptLogin(userInfo: {username: string, password: string}): void {  
    this.usersService.getUser(userInfo.username, userInfo.password).subscribe((maybeAUser: User | undefined) => {
      if (maybeAUser !== undefined) {
        this.username = userInfo.username
        this.userID = maybeAUser.id
        this.userSubject.next(this.username)
        this.refreshEvents()
      } else 

      alert('username/password does not exit, need to register')
    })
  }

  whenUsernameChanges(): Observable<string | undefined>{
    return this.userSubject.asObservable()
  
  }

  logout(): void{
    this._router.navigate(["/"])   // to logout if logging thru registration
    this.userSubject.next(undefined)

  }

  attemptRegistration(userInfo: {username: string, password: string}) {  
    this.usersService.postUserReg(userInfo.username, userInfo.password).subscribe((maybeAUser: User | undefined) => {
      if (maybeAUser !== undefined) {
        this.username = userInfo.username
        this.userID = maybeAUser.id
        this.userSubject.next(this.username)
        this.refreshEvents()
      } else 

      console.log('registration failed')
    })
  
  
  }

  getUserForInvite(userInfo: {username: string, password: string}) {  
    this.usersService.getUserName().subscribe()
  }

}


