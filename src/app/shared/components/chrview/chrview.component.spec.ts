import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrviewComponent } from './chrview.component';

describe('ChrviewComponent', () => {
  let component: ChrviewComponent;
  let fixture: ComponentFixture<ChrviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChrviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
