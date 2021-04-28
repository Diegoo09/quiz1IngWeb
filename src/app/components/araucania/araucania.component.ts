import { Component, OnInit } from '@angular/core';
import {ListaDias,Inter} from '../../interfaces/inter';

@Component({
  selector: 'app-araucania',
  templateUrl: './araucania.component.html',
  styleUrls: ['./araucania.component.scss']
})
export class AraucaniaComponent implements OnInit {

  Lista=ListaDias;

  constructor() { }

  ngOnInit(): void {
  }

}
