import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  public selectedId: any;

  public data = [
    {
      "id": 1,
      "firstName": "Devesh",
      "secondName": "Gupta",
      "age": 22
    },
    {
      "id": 2,
      "firstName": "Karan",
      "secondName": "Raj",
      "age": 22
    }
  ];
  public _url: any;


  func(id: any) {
    this.router.navigate(['/details', id]);
    // this.router.navigate([id], { relativeTo: this.route }); Automatically make list/id.
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => this.selectedId = params.get('id'));
  }

  isSelected(id: number) {
    return id === parseInt(this.selectedId);
  }

}

