import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBankingServicesComponent } from './business-banking-services.component';

describe('BusinessBankingServicesComponent', () => {
  let component: BusinessBankingServicesComponent;
  let fixture: ComponentFixture<BusinessBankingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBankingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBankingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
