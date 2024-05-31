import { Injectable } from '@angular/core';
import { Person } from '../../data/cook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class PersonController {

    readonly backendUrl = 'vehicle';
  
    constructor(private http: HttpClient) {
    }
  
    public getList(): Observable<Person[]> {
      return this.http.get<Person[]>(Person.backendBaseUrl + this.backendUrl);
    }
  

 

}
