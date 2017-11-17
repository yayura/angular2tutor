import { Component, OnInit, Input } from '@angular/core';
import { Bro } from '../bro';

@Component({
  selector: 'app-bro-detail',
  templateUrl: './bro-detail.component.html',
  styleUrls: ['./bro-detail.component.css']
})


export class BroDetailComponent implements OnInit {
  @Input() bro: Bro;
  
  constructor() { }

  ngOnInit() {
  }
  
}
