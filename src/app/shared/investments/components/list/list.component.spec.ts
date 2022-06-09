import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Investiments } from '../../interfaces/investiments.interface';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let service: ListInvestimentsService;

  const mockList: Investiments[] = [
    { name: 'Banco 1', value: 100 },
    { name: 'Banco 2', value: 200 },
    { name: 'Banco 3', value: 300 },
    { name: 'Banco 4', value: 400 },
    { name: 'Banco 5', value: 500 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
      providers: [ListInvestimentsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvestimentsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should investiments has three values', () => {
    const service = TestBed.inject(ListInvestimentsService);
    const list = jest.spyOn(service, 'list').mockImplementation(async ()=>{
      return mockList
    })
    component.ngOnInit();
    fixture.detectChanges();
    expect(list).toHaveBeenCalled();
  });
});
