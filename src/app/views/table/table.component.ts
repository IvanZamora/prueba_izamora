import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public results: any;
  public displayColumns: string[] = ["Name", "Height", "Eye Color", "Creation Date"];
  public search: string = "";

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((response:People) => {
      this.results = response;
      console.log(this.results)
    })
  }

  public searchResult(search:string):any {

  }

}
