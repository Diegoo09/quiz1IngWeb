import { Component, OnInit } from '@angular/core';
import {ListaDias,Inter} from '../../interfaces/inter';

@Component({
  selector: 'app-metropolitana',
  templateUrl: './metropolitana.component.html',
  styleUrls: ['./metropolitana.component.scss']
})
export class MetropolitanaComponent implements OnInit {

  Lista=ListaDias;

  constructor() { }

  ngOnInit(): void {
  }

}
