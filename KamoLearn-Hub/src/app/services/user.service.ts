import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {CreateUserDTO}  from '../DTO/create-user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl + '/User';

  constructor(private http: HttpClient) {}

  createUser(dto: CreateUserDTO): Observable<any> {
    return this.http.post<any>(this.baseUrl, dto);
  }

  // Optional: you can add more methods like getUser, updateUser, deleteUser
}