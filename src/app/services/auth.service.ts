import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API = '/api/auth';
  constructor(private http: HttpClient) {}

  /**
   *
   * @param data
   * @returns Observable
   */
  register(data: User): Observable<User> {
    return this.http.post<User>(`${this.AUTH_API}/register`, data);
  }

  /**
   *
   * @param data
   * @returns Observable
   */
  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}/login`, data);
  }

  /**
   *
   * @returns current User
   */
  currentUser(): Observable<User> {
    return this.http.get<User>(`${this.AUTH_API}/current-user`);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}/logout`,{});
  }

 updateProfile(data: User): Observable<User> {
  return this.http.put<User>(`${this.AUTH_API}/profile`, data);
 }

 changePassword(data: {password: string, confirm_password: string}): Observable<any> {
  return this.http.put<any>(`${this.AUTH_API}/profile`, data);
 }


}
