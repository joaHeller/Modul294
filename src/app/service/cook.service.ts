import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KochController {

  readonly backendUrl = 'KochController';
  static backendBaseUrl: string;
   
  constructor(private http: HttpClient) {
  }

  public getList(): Observable<KochController[]> {
    return this.http.get<KochController[]>(KochController.backendBaseUrl + this.backendUrl);
  }

}
