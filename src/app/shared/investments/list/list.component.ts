import { Investiments } from './../interfaces/investiments.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  investiments: Investiments[] = [
    {
      name: 'Fundos Imobiliários',
      value: 18000,
    },
    {
      name: 'Ações',
      value: 830,
    },
    {
      name: 'Tesouro Direto',
      value: 25660,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
