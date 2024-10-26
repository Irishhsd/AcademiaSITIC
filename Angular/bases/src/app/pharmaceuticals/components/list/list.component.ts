import { Component, Input, OnInit } from '@angular/core';
import { EPharmaType } from '../../interfaces/enums.interface';
import { Drug } from '../../interfaces/drug.interface';

@Component({
  selector: 'pharmaceuticals-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  EPharmaType = EPharmaType;

  @Input() pharmaList: Drug[] = [
    {
      name: "Paracetamol",
      price: 20,
      type: EPharmaType.Analgesico
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
