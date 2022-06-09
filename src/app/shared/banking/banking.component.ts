import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private poupanca: number = 150;
  private carteira: number = 580;
  constructor() {}

  ngOnInit(): void {}

  get getPoupanca(): number {
    return this.poupanca;
  }
  get getCarteira(): number {
    return this.carteira;
  }

  setSacar(value: string): number | undefined {
    const money = parseFloat(value);
    if (isNaN(money) || this.poupanca < money) {
      console.log('Digite um número válido');
      return;
    }
    this.poupanca -= money;
    return this.carteira += money;
  }
  setDepositar(value: string): number | undefined {
    const money = parseFloat(value);
    if (isNaN(money) || this.carteira < money) {
      console.log('Digite um número válido');
      return;
    }
    this.carteira -= money
    return this.poupanca += money;
  }
}
