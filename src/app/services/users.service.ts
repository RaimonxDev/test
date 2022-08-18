import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl='http://localhost:5000/Users';

  constructor(private http: HttpClient) { }

// create a method to get a particular user by username and password
getUser(username: string, password: string): Observable<User | undefined> {
  return this.http.get<User[]>(`http://localhost:5000/users?username=${username}&password=${password}`) 
    .pipe(map(users => {                      
      if (users.length === 0)
        return undefined
      else
      return users[0]
    }))
}



// post request on user/password to fill out the dabatabase

//registration 5. postUserReg passes the username/password as observable and posts this user/password to the json server

postUserReg(username:string,password:string):Observable<undefined>{
  const user: User = {
        username,
        password
  }
return this.http.post<undefined>(this.apiUrl,user)
}




getUserName(): Observable<User | undefined> {
  return this.http.get<User[]>(this.apiUrl) 
    .pipe(map(users => {                      
      if (users.length === 0)
        return undefined
      else
      return users[0]
    }))
}

}