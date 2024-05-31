import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritenContoller {

  readonly backendUrl = 'department';
  static backendBaseUrl: string;

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<FavoritenContoller[]> {
    return this.http.get<FavoritenContoller[]>(FavoritenContoller.backendBaseUrl + this.backendUrl);
  }

}
