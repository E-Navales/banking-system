import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTransactionsComponent } from './about-transactions.component';

describe('AboutTransactionsComponent', () => {
  let component: AboutTransactionsComponent;
  let fixture: ComponentFixture<AboutTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
