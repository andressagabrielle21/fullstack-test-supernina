import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Assuming HttpClient is part of the new HTTP module
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8000/complaints';  // URL of the FastAPI endpoint

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}