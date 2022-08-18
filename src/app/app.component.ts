import { Component } from '@angular/core';
import { UIService } from './services/ui.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string | undefined

  constructor(private uiService: UIService){
    // responding to the event
    uiService.whenUsernameChanges().subscribe(username => this.username = username)
    
  }

}
