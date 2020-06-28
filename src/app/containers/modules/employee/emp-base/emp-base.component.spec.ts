import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBaseComponent } from './emp-base.component';

describe('EmpBaseComponent', () => {
  let component: EmpBaseComponent;
  let fixture: ComponentFixture<EmpBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
