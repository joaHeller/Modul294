import { TestBed } from '@angular/core/testing';
import { KochController } from './cook.service';

describe('PersonService', () => {
  let service: KochController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KochController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
