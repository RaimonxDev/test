import { Component, OnInit, Input} from '@angular/core';
import {Event} from 'src/app/Event'
import { UIService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  // input -- every obj of EvenComp needs an event  -- expect data from html file  -- event set from the html
  @Input()
// defining event & init it (after, event will be filled with data that comes form the html)
// needs to be init or set as union type undefined for constructor to have data to start
// before NgInit is called, event will have data from html
      event: Event = {
      createdOn: new Date,
      eventDate: new Date,
      eventTitle: 'Event 1',
      eventDescrip: 'description'

  }

  constructor(private uiService: UIService) {  }

  ngOnInit(): void { 
  }

onEditEvent(): void{
  //console.log('edit event component')
  if (this.event.id !== undefined)
  this.uiService.startEditEvent(this.event.id)
  else
  console.log('id undefined - cannot edit it')
}

onDeleteEvent(): void{
  console.log('delete event component')
  if (this.event.id)
    this.uiService.deleteEventHappened(this.event.id)  
  else
  console.log('id undefined - cannot delete it') // display nicely
}

onCreateInvite(): void{
  console.log("create invite")
}

}


