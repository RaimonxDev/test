import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Event } from 'src/app/Event'
import { Invite } from 'src/app/Invite'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrlEvent = 'http://localhost:5000/events';
  private apiUrlInvite = 'http://localhost:5000/invites';


  constructor(private http: HttpClient) { }


  getEventsByUserId(userID: number | undefined): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrlEvent}?userID=${userID}`)
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrlEvent}`)
  }

  postNewEvent(event: Event): Observable<undefined> {
    return this.http.post<undefined>(this.apiUrlEvent, event).pipe(
      tap(this.getEventsByUserId(event.userID).subscribe())
    )
  }

  deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.apiUrlEvent}/${id}`)
  }

  editEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrlEvent}/${id}`, event)
  }

  postNewInvite(invite: Invite): Observable<undefined> {
    return this.http.post<undefined>(this.apiUrlInvite, invite)
  }

}
