import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerListComponent } from './pensioner-list.component';

describe('PensionerListComponent', () => {
  let component: PensionerListComponent;
  let fixture: ComponentFixture<PensionerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
