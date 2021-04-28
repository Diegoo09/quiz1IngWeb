import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  title = 'materialApp'; 
   select1: string='';
   select2: string='';
   clm: string[] = ['soleado', 'lluvioso', 'nublado', 'tormenta'];
   tm: string[] = ['celsius', 'fahrenheit'];

  constructor() {

   }

  ngOnInit(): void {
  }
}
