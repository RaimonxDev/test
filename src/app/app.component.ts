import { Component } from '@angular/core';
import { User } from './User';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: User | undefined

  constructor(userService: UsersService) {
    // responding to the event
    userService.user$.subscribe(username => this.username = username)

  }

}
