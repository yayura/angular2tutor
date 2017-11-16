import { Component, OnInit } from '@angular/core';
import { Bro } from '../bro';
@Component({
  selector: 'app-bros',
  templateUrl: './bros.component.html',
  styleUrls: ['./bros.component.css']
})
export class BrosComponent implements OnInit {
  bro: Bro = {
    id:1,
    name: "Windstorm"
  };
  constructor() { }
    ngOnInit() {
  }

}
