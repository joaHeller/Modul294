import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('DatalistComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<CookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookComponent],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        BrowserModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CookComponent);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, NgModule, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CookComponent } from './cook.component';


@Component({
  selector: 'app-actor-list',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css'],
})
export class ActorListComponent implements OnInit {
  actors: any[] = [];
  cookService: any;

  constructor() {}

  ngOnInit(): void {
    this.cookService.getActors().subscribe((data: any[]) => {
      this.actors = data;
    });
  }
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
