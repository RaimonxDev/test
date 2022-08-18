import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  password: string = ""
  pending: boolean = false

  constructor(private uiService:UIService) { }

  ngOnInit(): void {
  }

  // triggers the event
  onSubmit(event: {preventDefault: () => void}): void {
    event.preventDefault()
    this.uiService.attemptLogin({
      username: this.username,
      password: this.password
    })
  }

  

  }




