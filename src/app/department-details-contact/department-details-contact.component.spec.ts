import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsContactComponent } from './department-details-contact.component';

describe('DepartmentDetailsContactComponent', () => {
  let component: DepartmentDetailsContactComponent;
  let fixture: ComponentFixture<DepartmentDetailsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
