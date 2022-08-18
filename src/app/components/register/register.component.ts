import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { User } from '../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = ''
  password: string = ''
  pending: boolean = false

  newuser: User [] = []

  constructor(private uiService:UIService) { // 2. let the ui service know that info will be sent
  }

  ngOnInit(): void {
  }

onUserReg(event: {preventDefault: () => void}){    // do not care what is coming as long as somenthis is 
    event.preventDefault()
    if (!this.username || !this.password){
      alert('missing username or password')
      return
    }
    const userReg={
      username: this.username,
      password: this.password
    }
    console.log(userReg)

    this.uiService.attemptRegistration({username: this.username,  // 3. attempRegistration passing the username/password
      password: this.password})

       // clear the form
    this.username = ''
    this.password = ''
  }

  }



