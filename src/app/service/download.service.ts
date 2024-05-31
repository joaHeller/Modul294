import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadDownloadController {

  readonly backendUrl = 'UploadDownloadContoller';
  static backendBaseUrl: string;
 
  constructor(private http: HttpClient) {
  }

  public getList(): Observable<UploadDownloadController[]> {
    return this.http.get<UploadDownloadController[]>(UploadDownloadController.backendBaseUrl + this.backendUrl);
  }

}


