import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedProduct } from './searched-product';

describe('SearchedProduct', () => {
  let component: SearchedProduct;
  let fixture: ComponentFixture<SearchedProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchedProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
