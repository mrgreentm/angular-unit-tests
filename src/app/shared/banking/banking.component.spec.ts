import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { waitForAsync } from '@angular/core/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should poupanca = 150 when calls getPopupanca()', () => {
    expect(component.getPoupanca).toEqual(150);
  });
  it('should carteira = 580 when calls getCarteira()', () => {
    expect(component.getCarteira).toEqual(580);
  });

  it('should poupanca = 140 when calls setSacar("10")', () => {
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(140);
    expect(component.getCarteira).toEqual(590);
  });

  it('should poupanca = 160 when calls setDepositar("10")', () => {
    component.setDepositar('10');
    expect(component.getPoupanca).toEqual(160);
    expect(component.getCarteira).toEqual(570);
  });

  it('should donts acceppt string values on parameter setDepositar', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(150);
    expect(component.getCarteira).toEqual(580);
  });

  it('should donts acceppt less than values on parameter setDepositar', () => {
    expect(component.setDepositar('581')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(150);
    expect(component.getCarteira).toEqual(580);
  });

  it('should donts acceppt string values on parameter setSacar', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(150);
    expect(component.getCarteira).toEqual(580);
  });

  it('should donts acceppt less than values on parameter setSacar', () => {
    expect(component.setSacar('151')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(150);
    expect(component.getCarteira).toEqual(580);
  });

  it('should show on display poupanca value', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges(); //detectar as mudanças no DOM
    const carteira = el.querySelector('#get-carteira')
    const poupanca = el.querySelector('#get-poupanca')
    expect(component.getPoupanca).toEqual(160);
    expect(component.getCarteira).toEqual(570);
    expect(carteira.innerHTML).toEqual('570');
    expect(poupanca.innerHTML).toEqual('160');
  });
});
