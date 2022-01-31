import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../../interfaces/links.interface';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpint = '/api/users';
  constructor(
    private http: HttpClient
  ) {
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.endpint)
  }
  links(userId: number): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.endpint}/${userId}/links`);
  }
}
