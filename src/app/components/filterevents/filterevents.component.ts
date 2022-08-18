import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/Event';
import {User} from 'src/app/User';
import { UIService } from 'src/app/services/ui.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';


@Component({
  selector: 'app-filterevents',
  templateUrl: './filterevents.component.html',
  styleUrls: ['./filterevents.component.css']
})
export class FiltereventsComponent implements OnInit {

  events: Event[] = []
  users: User[] = []
  // eventToEditId: number | undefined
  

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  

  constructor(private uiService:UIService) { 

  uiService.whenEventsListUpdated().subscribe(events => this.events=events)

  }
  ngOnInit(): void {
    
  }


  onFilterByDate(): void{


  }

}
