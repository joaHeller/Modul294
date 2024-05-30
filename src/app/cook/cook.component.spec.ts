import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatalistComponent } from './datalist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('DatalistComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<DatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatalistComponent],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        BrowserModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actor-list',
  templateUrl: './cook-list.component.html',
  styleUrls: ['./actor-list.component.css'],
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
