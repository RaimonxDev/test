import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { User } from '../../User';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = ''
  password: string = ''
  showMessage: boolean = false
  pending: boolean = false

  newuser: User[] = []

  constructor(
    private uiService: UIService,
    private userService: UsersService,
    private router: Router) { // 2. let the ui service know that info will be sent
  }

  ngOnInit(): void {
  }

  onUserReg(event: SubmitEvent) {    // do not care what is coming as long as somenthis is
    if (!this.username || !this.password) {
      alert('missing username or password')
      return
    }
    // registra al usuario
    this.uiService.attemptRegistration({
      username: this.username,  // 3. attempRegistration passing the username/password
      password: this.password
    }).subscribe(
      {
        next: result => {
          this.userService.setUser = result
          this.router.navigate(['/home'])
        },
        error: error => {
          this.showMessage = true;
        }
      }
    )

    // clear the form
    this.username = ''
    this.password = ''
  }

}



