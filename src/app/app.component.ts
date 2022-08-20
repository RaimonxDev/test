import { Component } from '@angular/core';
import { UIService } from './services/ui.service';
import { User } from './User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: User | undefined

  constructor(private uiService: UIService) {
    // responding to the event
    uiService.user$.subscribe(username => this.username = username)

  }

}
