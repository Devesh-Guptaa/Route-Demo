import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsOverviewComponent } from './department-details-overview.component';

describe('DepartmentDetailsOverviewComponent', () => {
  let component: DepartmentDetailsOverviewComponent;
  let fixture: ComponentFixture<DepartmentDetailsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
