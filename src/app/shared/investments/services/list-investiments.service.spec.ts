import { TestBed } from '@angular/core/testing';

import { ListInvestimentsService } from './list-investiments.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../interfaces/investiments.interface';
describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const url =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockList: Investiments[] = [
    { name: 'Banco 1', value: 100 },
    { name: 'Banco 2', value: 200 },
    { name: 'Banco 3', value: 300 },
    { name: 'Banco 4', value: 400 },
    { name: 'Banco 5', value: 500 },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be load all investiments', (done) => {
    service.list().then((res: Investiments[]) => {
      expect(res[0].name).toEqual('Banco 1');
      done();
    });
    const req = httpTestingController.expectOne(url);
    req.flush(mockList);
    expect(req.request.method).toEqual('GET');
  });
});
