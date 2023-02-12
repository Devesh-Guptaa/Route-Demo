import { DepartmentDetailsContactComponent } from './department-details-contact/department-details-contact.component';
import { DepartmentDetailsOverviewComponent } from './department-details-overview/department-details-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // Can also use prefix, but '' is prefix to all, therefore pageNotFound will be always called.
  { path: "list", component: EmployeeListComponent },
  { path: "details", component: EmployeeDetailsComponent },
  {
    path: "details/:id", component: DepartmentDetailsComponent,
    children: [
      { path: "overview", component: DepartmentDetailsOverviewComponent },
      { path: "contact", component: DepartmentDetailsContactComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
