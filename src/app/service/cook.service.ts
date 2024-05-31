import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../data/cook';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  readonly backendUrl = 'person';

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public save(person: Person): Observable<Person> {
    return this.httpClient.post<Person>('http://localhost:9090/api/person', person);
  }
}
