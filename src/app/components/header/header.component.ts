import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = 'default'


  constructor(private uiService: UIService) {

    // uiService.whenUsernameChanges().subscribe(username => {  // 3. from the uiservice, needs to bring the observable

    //   if (username !== undefined)
    //     this.username = username


    // })

  }


  ngOnInit(): void {

    // this.uiService.dummyUsernameUpdate()   // 4. to update the username after it is initialized
  }

  onLogOut(): void {
    this.uiService.logout()
  }
}


