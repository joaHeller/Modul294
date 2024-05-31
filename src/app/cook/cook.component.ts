import { Person } from '../../data/cook';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CookService } from '../service/cook.service';

 @Component({
 selector: 'app-datalist',
templateUrl: './cook.component.html',
 styleUrl: './cook.component.scss',
})
 export class CookComponent {
cook: any;
  constructor(private cookService: CookService) {
     this.reloadData();
  }

  displayedColumns: string[] = ['id', 'name', 'age'];
  text = 'Ich bin ein Text';
  date = new Date();
  data: Person[] = [];

 public personForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
  age: new UntypedFormControl(0),
  });

  save(formData: any) {
   const person: Person = Object.assign(formData);
     this.cookService.save(person).subscribe(()=> {
     this.reloadData();
      });
 }

 reloadData() {
      this.cookService.getList().subscribe((persons: Person[]) => {
        this.data= persons;
     });
   }

  sayHello() {
    this.text = 'Neuer Text';
   alert('Hello');
   const p = new Person();
    p.age = 40;
  p.id = 1;
 p.name = 'Mike';
    this.data.push(p);
  }


}
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private apiUrl = 'http://localhost:8080/api/actors';

  constructor(private http: HttpClient) { }

  getActors(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


