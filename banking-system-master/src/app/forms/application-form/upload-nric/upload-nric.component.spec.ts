import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNricComponent } from './upload-nric.component';

describe('UploadNricComponent', () => {
  let component: UploadNricComponent;
  let fixture: ComponentFixture<UploadNricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
