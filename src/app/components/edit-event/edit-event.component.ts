import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Event} from 'src/app/Event'
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  // @Input has to be init or assigned undefined
  @Input()  event: Event = {
      createdOn: new Date,
      eventDate: new Date,
      eventTitle: '',
      eventDescrip: '',
      username: ''
  }

  @Output() applyEditEvent: EventEmitter<Event> = new EventEmitter()
  @Output() cancelEditEvent: EventEmitter<undefined> = new EventEmitter()

  // var to store the value of eventDescrip when it changes
  newEventTitle: string = ''  // empty to match the init value in the constructor
  newDescrip: string = ''  // empty to match the init value in the constructor
  newEventDate: Date = new Date
  newUsername: string | undefined
  
  constructor(private uiService: UIService) { }

  ngOnInit(): void { 
    this.newEventTitle=this.event.eventTitle
    this.newDescrip = this.event.eventDescrip  
    this.newEventDate = this.event.eventDate
    this.newUsername=this.event.username
  }

onApplyEditEvent(): void{
  //console.log(this.newEventTitle, this.newDescrip )
  //this.uiService.applyCreateEventHappened(this.newEventTitle, this.newEventDate,this.newDescrip) // not informing the service, but the parent component

 this.applyEditEvent.emit
 ({...this.event, eventTitle: this.newEventTitle, eventDate: this.newEventDate, eventDescrip: this.newDescrip, username: this.newUsername} )  // need to send the content of the event

}

onCancelEditEvent(): void{
  //this.uiService.cancelAddEvent()
  this.cancelEditEvent.emit()

}
}
