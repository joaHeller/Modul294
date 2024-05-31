import { TestBed } from '@angular/core/testing';
import { CookService } from './cook.service';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Rezept } from './'; // Stelle sicher, dass du das richtige Modell importierst

describe('CookService', () => {
  let service: CookService;
  let httpSpy: Spy<HttpClient>;

  const fakeRezept: Rezept[] = [
    {
      id: 1,
      title: 'Rezept 1',
      ingredients: 'Zutaten 1',
      steps: 'Steps 1'
    },
    {
      id: 2,
      title: 'Rezept 2',
      ingredients: 'Zutaten 2',
      steps: 'Steps 2'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });
    service = TestBed.inject(CookService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of rezept', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeRezept);

    service.getList().subscribe({
      next: rezept => {
        expect(rezept).toHaveSize(fakeRezept.length);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should create a new rezept', (done: DoneFn) => {
    const newRezept: Rezept = {
      id: 3,
      title: 'Rezept 3',
      ingredients: 'Ingredients 3',
      steps: 'Steps 3'
    };

    httpSpy.post.and.nextWith(newRezept);

    service.save(newRezept).subscribe({
      next: rezept => {
        expect(rezept).toEqual(newRezept);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should update a rezept', (done: DoneFn) => {
    const rezept = fakeRezept[0];
    rezept.title = 'Updated Rezept';

    httpSpy.put.and.nextWith(rezept);

    service.update(rezept).subscribe({
      next: updatedRezept => {
        expect(updatedRezept.title).toEqual('Updated Rezept');
        done();
      },
      error: done.fail
    });
    expect(httpSpy.put.calls.count()).toBe(1);
  });

  it('should delete an existing rezept', (done: DoneFn) => {
    httpSpy.delete.and.nextWith(new HttpResponse({
      status: 200
    }));

    service.delete(1).subscribe({
      next: response => {
        expect(response.status).toBe(200);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.delete.calls.count()).toBe(1);
  });
});
