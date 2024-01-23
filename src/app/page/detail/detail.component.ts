import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChrDetail, IChrMoreDetail } from 'src/app/shared/models/characters.model';
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
columsNames=['name','gender','origin','createdAt']
  character1: IChrDetail = {
    img: '',
    currentStatus: 0
  };
  character2: IChrDetail = {
    img: '',
    currentStatus: 0
  };
  character3: IChrDetail = {
    img: '',
    currentStatus: 0
  };

  chrdetail1: IChrMoreDetail[]=[];
  chrdetail2:IChrMoreDetail[]=[];

  constructor(
    private rickMortyService: RickMortyService
  ) { 
    this.rickMortyService.getCharacters().subscribe((data => {

      const chr1=getRandomInt(9);
      const chr2=getRandomInt(9);

      this.character1 = {
        img: data[getRandomInt(19)].image,
        currentStatus: getRandomInt(1500)
      };
      this.character2 = {
        img: data[getRandomInt(19)].image,
        currentStatus: getRandomInt(1500)
      };
      this.chrdetail1=[{
        createdAt:data[chr1].createdAt,
        gender:data[chr1].gender,
        origin:data[chr1].origin,
        name:data[chr1].name
      }]
      this.chrdetail2=[{
        createdAt:data[chr1].createdAt,
        gender:data[chr1].gender,
        origin:data[chr1].origin,
        name:data[chr1].name
      }]
      this.isReady.next(true);
    }
    ));
  }

  ngOnInit(): void {
  }

}
