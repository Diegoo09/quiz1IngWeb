import { Component, OnInit } from '@angular/core';
import {ListaDias,Inter} from '../../interfaces/inter';

@Component({
  selector: 'app-biobio',
  templateUrl: './biobio.component.html',
  styleUrls: ['./biobio.component.scss']
})
export class BiobioComponent implements OnInit {

  Lista=ListaDias;

  constructor() { }

  ngOnInit(): void {
  }

}
