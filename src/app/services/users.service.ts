import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, ReplaySubject, skip, Subject, switchMap, BehaviorSubject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:5000/Users';

  // OBSERVABLE PRIVADO
  private userSubject = new BehaviorSubject<User | undefined>(undefined)
  public userName!: string | undefined;
  // Get User
  public get user$() {
    return this.userSubject.asObservable()
  }
  // Update User
  public set setUser(user: User) {
    this.userSubject.next(user)
  }

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

  postUserReg(username: string, password: string): Observable<User> {
    const user: User = {
      username,
      password
    }
    return this.http.post<User>(this.apiUrl, user)
  }


  checkExistUser(value: User): Observable<boolean> {
    // DEVUELVE TODOS LOS USUARIOS
    return this.http.get<User[]>(this.apiUrl).pipe(
      switchMap((users: User[]) => {
        console.log(users);
        const check = users.find(user => user.username === value.username);
        return check ? of(true) : of(false);
      })
    );
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
