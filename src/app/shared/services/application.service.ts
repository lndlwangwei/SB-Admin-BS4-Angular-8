import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

    private baseUrl = 'http://localhost:8093';

    constructor(public httpClient: HttpClient) { }

    public getAll(): Observable<any> {
        return this.httpClient.get<any>(`${this.baseUrl}/applications`);
    }

    public add(application: any): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}/applications`, application);
    }

    public update(application: any): Observable<any> {
        return this.httpClient.put<any>(`${this.baseUrl}/applications/${application.id}`, application);
    }
}
