import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

 

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${baseUrl}/user/create`, user);
  }

  public getUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(`${baseUrl}/user/get/${username}`);
  }

  public updateUserByUsername(user: User, username: string): Observable<User>{
    return this.http.put<User>(`${baseUrl}/user/update/${username}`, user);
  }

  public deleteUserByUsername(username: string): Observable<User>{
    return this.http.delete<User>(`${baseUrl}/user/delete/${username}`);
  }

}
