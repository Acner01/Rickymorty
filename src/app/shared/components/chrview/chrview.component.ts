import { Component, OnInit } from '@angular/core';
import { IChrDetail } from '../../models/characters.model';

@Component({
  selector: 'app-chrview',
  templateUrl: './chrview.component.html',
  styleUrls: ['./chrview.component.scss']
})
export class ChrviewComponent implements OnInit {

  chrDetail: IChrDetail = {
    img: '',
    power: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
