import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should investiments has three values', () => {
    const investiments = component.investiments;
    expect(investiments[0].name).toEqual('Fundos Imobiliários');
    expect(investiments[2].name).toEqual('Tesouro Direto');
    expect(investiments.length).toEqual(3);
  });

  it('should list investiments with three values', () => {
    const investimentsList =
      fixture.debugElement.nativeElement.querySelectorAll('.list-element');
    expect(investimentsList.length).toEqual(3);
    expect(investimentsList[0].innerHTML.trim()).toEqual(
      'Fundos Imobiliários - R$ 18000'
    );
  });
});
