import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/Event';
import {User} from 'src/app/User';
import { UIService } from 'src/app/services/ui.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  // add event display on/off

addingEvent: boolean = false

events: Event[] = []
users: User[] = []
eventToEditId: number | undefined
eventsFilterByDate:Event[]=[]

dateRange = new FormGroup({
  start: new FormControl(),
  end: new FormControl()
});

// dependency to be injected in the constructor
  constructor(private uiService: UIService) { 
 //tells the uiService that whenAddEventStarted to be notified and 
 // subscribe get a function passed because it is a set of instructions to be referenced later (similar to a function calling another function)
 uiService.whenAddEventStarted().subscribe(showAddEvent => this.addingEvent = showAddEvent)
 uiService.whenEventsListUpdated().subscribe(events => 
  {
    this.events=events
    this.eventsFilterByDate=this.events
  })
 uiService.whenStartEditHappened().subscribe(id => this.eventToEditId = id)
  
}  

  ngOnInit(): void {

    this.uiService.dummyEventsUpdate()

  }


// trigger the event
  onAddEventClicked(): void{
this.uiService.startAddEvent()
  }

//   ------------   create event

  onCreateEvent(event: Event): void{
    console.log(event)
    this.uiService.applyCreateEventHappened(event.eventTitle, event.eventDate,event.eventDescrip) 
  }

  onCancelCreate(): void{
    this.uiService.cancelAddEvent()
  }

//  --------------- edit event

  onApplyEdit(event: Event): void{
    if (event.id !== undefined)
    this.uiService.applyEditEvent(event.id, event.eventTitle, event.eventDate,event.eventDescrip)
    else
    console.log('id undefined, cannot apply edit')
  }


  onCancelEdit(): void{
    this.uiService.cancelEditEvent()
  }

  //  ------------------delete event


  deleteEvent(event:Event): void{
    
  }

  onFilterByDate(): void{

    this.eventsFilterByDate=[]
    // console.log(this.events.length)
    let eventLenght=this.events.length

    let sDate = (new Date(this.dateRange.value.start)).getTime()
    let lDate = (new Date(this.dateRange.value.end)).getTime()
    let eDate: number =0 

      for (let i=0; i<eventLenght; i++)
      {
        // console.log (this.events[i].eventDate)
        // console.log(this.dateRange.value.start.getTime())   
        
        eDate=((new Date(this.events[i].eventDate)).getTime())+18000000

        // console.log (eDate)
        // console.log(sDate)
        // console.log(lDate)

        if ((sDate<= eDate) && (lDate>= eDate))
          {
            // console.log('is working')
            // console.log(this.eventsFilterByDate)
            this.eventsFilterByDate.push(this.events[i])
            // console.log(this.eventsFilterByDate)
          }
      } 
  

    }
  }
    
