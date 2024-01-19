import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChrDetail } from 'src/app/shared/models/characters.model';
import { RickMortyService } from 'src/app/shared/services/rick-morty.service';
import { getRandomInt } from 'src/app/shared/utils/operations/math.operation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [RickMortyService]
})
export class DetailComponent implements OnInit {

  isReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  character1: IChrDetail = {
    img: '',
    currentStatus: 0
  };
  character2: IChrDetail = {
    img: '',
    currentStatus: 0
  };

  constructor(
    private rickMortyService: RickMortyService
  ) { 
    this.rickMortyService.getCharacters().subscribe((data => {

      this.character1 = {
        img: data[getRandomInt(19)].image,
        currentStatus: getRandomInt(1500)
      };
      this.character2 = {
        img: data[getRandomInt(19)].image,
        currentStatus: getRandomInt(1500)
      };
      this.isReady.next(true);
    }))
  }

  ngOnInit(): void {
  }

}
