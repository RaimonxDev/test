import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/Event'
import { UIService } from 'src/app/services/ui.service';
import { EventsService } from '../../services/events.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  // Form event
  eventForm!: FormGroup;
  user!: User | undefined;
  constructor(
    private eventService: EventsService,
    private userService: UsersService) { }

  ngOnInit(): void {

    this.userService.user$.subscribe(user => this.user = user)

    this.eventForm = new FormGroup({
      eventTitle: new FormControl(''),  // empty to match the init value in the constructor
      eventDescrip: new FormControl(''), // empty to match the init value in the constructor
      eventDate: new FormControl(''),
      username: new FormControl({ value: '', disabled: true }),
    })

  }

  createEvent() {
    const newEvent = {
      ...this.eventForm.value,
      userID: this.user?.id,
      username: this.user?.username,
      createdOn: new Date,
    }
    this.eventService.postNewEvent(newEvent).subscribe(result => {
      console.log(result);
      this.eventForm.reset()
      alert('Complete, Event Created')
    });
  }

  cancelEvent() {
    this.eventForm.reset();
  }




}
