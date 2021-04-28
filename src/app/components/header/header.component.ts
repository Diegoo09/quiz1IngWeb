import { Component, OnInit } from '@angular/core';
import {ListaDias,Inter} from '../../interfaces/inter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Lista=ListaDias;

  constructor() { }

  ngOnInit(): void {
  }

}
