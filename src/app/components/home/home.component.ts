import { Component, OnInit } from '@angular/core';
import {ListaDias,Inter} from '../../interfaces/inter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Lista=ListaDias;

  constructor() { }

  ngOnInit(): void {
  }

}
