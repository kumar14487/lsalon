import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOpenCloseTimeComponent } from './shop-open-close-time.component';

describe('ShopOpenCloseTimeComponent', () => {
  let component: ShopOpenCloseTimeComponent;
  let fixture: ComponentFixture<ShopOpenCloseTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOpenCloseTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOpenCloseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
