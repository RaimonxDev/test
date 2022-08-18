import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Event} from 'src/app/Event'
import {Invite} from 'src/app/Invite'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrlEvent='http://localhost:5000/events';
  private apiUrlInvite='http://localhost:5000/invites';


  constructor(private http: HttpClient) { }


getEventsByUserId(userID: number): Observable<Event []> {
  return this.http.get<Event[]>(`http://localhost:5000/events?userID=${userID}`) 
}

getAllEvents(): Observable<Event []> {
  return this.http.get<Event[]>(`http://localhost:5000/events`) 
  }

postNewEvent(event : Event):Observable<undefined>{
  return this.http.post<undefined>(this.apiUrlEvent, event)
}

deleteEvent(id: number): Observable<Event> {
  return this.http.delete<Event>(`http://localhost:5000/events/${id}`)
}

editEvent(id: number, event: Event): Observable<Event> {
  return this.http.put<Event>(`http://localhost:5000/events/${id}`, event)
}

postNewInvite(invite : Invite):Observable<undefined>{
  return this.http.post<undefined>(this.apiUrlInvite, invite)
}

}