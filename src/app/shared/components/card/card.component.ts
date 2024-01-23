import { Component, Input, OnInit } from '@angular/core';
import { IChrDetail } from '../../models/characters.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() response: IChrDetail = {
    img: '',
    currentStatus: 0
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
