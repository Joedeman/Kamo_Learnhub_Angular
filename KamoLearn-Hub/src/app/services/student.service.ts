// src/app/services/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { ReadStudentDTO } from '../DTO/read-student-dto';
import { CreateStudentDTO } from '../DTO/create-student-dto';
import { UpdateStudentDTO } from '../DTO/update-student-dto';

@Injectable({
  providedIn: 'root' // allows standalone injection
})
export class StudentService {

  private baseUrl = `${environment.apiUrl}/Student`; // Base API URL for Student endpoints

  constructor(private http: HttpClient) {}

  // ---------------- GET ALL STUDENTS ----------------
  getAll(): Observable<ReadStudentDTO[]> {
    return this.http.get<ReadStudentDTO[]>(this.baseUrl);
  }

  // ---------------- GET STUDENT BY ID ----------------
  getById(id: number): Observable<ReadStudentDTO> {
    return this.http.get<ReadStudentDTO>(`${this.baseUrl}/${id}`);
  }

  // ---------------- CREATE STUDENT ----------------
  create(dto: CreateStudentDTO): Observable<any> {
    return this.http.post<any>(this.baseUrl, dto)
      .pipe(
        tap(() => console.log('Student created', dto))
      );
  }

  // ---------------- UPDATE STUDENT ----------------
  update(id: number, dto: UpdateStudentDTO): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, dto)
      .pipe(
        tap(() => console.log(`Student ${id} updated`, dto))
      );
  }

  // ---------------- DELETE STUDENT ----------------
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(() => console.log(`Student ${id} deleted`))
      );
  }

  // ---------------- Register STUDENT ----------------

  registerStudent(dto: any) {
  return this.http.post(`${this.baseUrl}/Student/register`, dto);
}

}
