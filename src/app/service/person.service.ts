import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class PersonController {

    readonly backendUrl = 'PersonController';
  static backendBaseUrl: string;
  
    constructor(private http: HttpClient) {
    }
  
    public getList(): Observable<PersonController[]> {
      return this.http.get<PersonController[]>(PersonController.backendBaseUrl + this.backendUrl);
    }
  

}
