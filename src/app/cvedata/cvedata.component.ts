import { Component, OnInit, ViewChild } from '@angular/core';
import { MetricService } from '../services/metric-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface CVEData {
  cveid: string;
  v2_exploitability_score: number;
  v2_impact_score: number;
  v3_exploitability_score: number;
  v3_impact_score: number;
  published_date: Date;
}

@Component({
  selector: 'app-cvedata',
  templateUrl: './cvedata.component.html',
  styleUrls: ['./cvedata.component.css']
})
export class CvedataComponent implements OnInit {

  displayedColumns: string[] = ['CVE-ID', 'V2 Exploit Score', 'V2 Impact Score', 'V3 Exploit Score', 'V3 Impact Score', 'Published Date'];
  dataSource : MatTableDataSource<CVEData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private metricService: MetricService) { 
    this.metricService.getCVEDateByMonth('05','2015').subscribe((res: any) => {
      this.dataSource = res;
      this.dataSource.paginator = this.paginator;
         
    });
    //console.log(this.dataSource);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  

}
