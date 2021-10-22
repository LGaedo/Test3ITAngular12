import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  get(mail: any): Observable<User> {
    return this.http.get(`${baseUrl}/${mail}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

}
