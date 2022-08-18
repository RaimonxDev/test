import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Event} from 'src/app/Event'
import {Invite} from 'src/app/Invite'
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

@Input() invite: Invite = {
    eventDate: new Date,  // init
    eventTitle: '',
    eventDescrip: ''
}

@Input()
        event: Event = {
        createdOn: new Date,
        eventDate: new Date,
        eventTitle: '',
        eventDescrip: '', 
    }

    
@Input() dateFromEvent: Date | undefined
@Input() titleFromEvent= ""
@Input() userFromEvent: string | undefined

  userName: string =''
  userList: string[] = ['user1', 'user2'];

  
  constructor(private uiService: UIService) { }

  ngOnInit(): void {
  }

  onUserInvited(): void{
    let userListLength=this.userList.length
    
    // this.userList.push(this.userName)
    // console.log(this.userList)
    for (let i=0; i<userListLength; i++)
    {

      // generates 1 invite for 1 of the usernames and post them into the json db
      console.log(this.userList[i])
    }
  }




}
