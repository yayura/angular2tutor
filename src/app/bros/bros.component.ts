import { Component, OnInit } from '@angular/core';
import { Bro } from '../bro';
import { BROS } from '../mock-bros';
@Component({
  selector: 'app-bros',
  templateUrl: './bros.component.html',
  styleUrls: ['./bros.component.css']
})
export class BrosComponent implements OnInit {
 
  bros = BROS;

  selectedBro: Bro;

  constructor() { }

  ngOnInit() {
  }

  
  onSelect(bro: Bro): void {
    this.selectedBro = bro;
  }
   
}
