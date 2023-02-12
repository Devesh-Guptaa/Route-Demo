import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {

  constructor(public route: ActivatedRoute, public router: Router) { }

  public id: any;

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    //Above will not update id, if we still remain on same component, because ngOnInit will not be called. Overall avoid snapshot.

    this.route.paramMap.subscribe((params: ParamMap) => { this.id = params.get('id') })
  }

  goBack() {
    this.router.navigate(['/list', { id: this.id }]);
    // this.router.navigate(['../', { id: this.id }], { relativeTo: this.route });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
