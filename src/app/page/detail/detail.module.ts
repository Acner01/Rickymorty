import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { TableModule } from 'src/app/shared/components/table/table.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    RouterModule.forChild([{
      path: '', 
      component: DetailComponent
    }])
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
