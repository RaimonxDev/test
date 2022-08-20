import { AfterViewInit, Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | undefined = 'default'
  constructor(private uiService: UIService, private userService: UsersService) {
  }
  ngOnInit(): void {
    this.userService.user$.subscribe(user => this.username = user?.username)
  }
  onLogOut(): void {
    this.uiService.logout()
  }
}


