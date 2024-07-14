import { Component } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-points-table-t20wc-2024',
  standalone: true,
  imports: [],
  templateUrl: './points-table-t20wc-2024.component.html',
  styleUrl: './points-table-t20wc-2024.component.css'
})
export class PointsTableT20wc2024Component {
  constructor(private api: ApiCallService) { }
  pointsTable: any
  tableHeadings: any
  ngOnInit(): void {
    this.loadPointsTable();
  }

  private loadPointsTable() {
    this.api.getPointsTable().subscribe({
      next: data => {
        this.pointsTable = data
        // console.log(this.pointsTable)
        this.tableHeadings = [...this.pointsTable[0]]
        this.pointsTable=this.pointsTable.slice(1,this.pointsTable.length)
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
