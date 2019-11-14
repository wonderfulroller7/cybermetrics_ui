import { Component, OnInit } from '@angular/core';
import { MetricService } from '../services/metric-service.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lineChartLabels: Label[] = [];
  lineChartOptions = {scales: {
    yAxes: [{
      id: 'A',
      type: 'linear',
      position: 'left',
      ticks: {
        max: 8000,
        min: 1000
      }
    }, {
      id: 'B',
      type: 'linear',
      position: 'right',
      ticks: {
        max: 3000,
        min: 0
      }
    }]
  }};
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartData: ChartDataSets[];
  chartReady: boolean = false;
  items: Item[] = [
    {value: 'activist_hacktivist', viewValue: 'Activist Hacktivist'},
    {value: 'criminals', viewValue: 'Criminals'},
    {value: 'nation_states', viewValue: 'Nation States'},
    {value: 'web_facing_applications', viewValue: 'Web Facing Applications'},
    {value: 'internet_exposed_devices', viewValue: 'Internet Exposed Devices'},
    {value: 'end_points', viewValue: 'End Points'},
    {value: 'mobile_devices', viewValue: 'Mobile Devices'},
    {value: 'public_infrastructure_or_cloud', viewValue: 'Public Infrastructure or Cloud'},
    {value: 'counterparties', viewValue: 'Counterparties'},
    {value: 'autonomous_network_connected_devices', viewValue: 'Autonomous Network Connected Devices'},
    {value: 'vulnerability_to_known_threats', viewValue: 'Vulnerability to known threats'},
    {value: 'vulnerability_to_unknown_threats', viewValue: 'Vulnerability to unknown threats'},
    {value: 'data_theft', viewValue: 'Data theft'},
    {value: 'data_modification', viewValue: 'Data modification'},
    {value: 'business_disruption', viewValue: 'Business Disruption'},
    {value: 'false_claims_of_digital_identity', viewValue: 'False Claims of digital identity'},
    {value: 'media_public_perception', viewValue: 'Media Public Perception'},
    {value: 'personal_risk', viewValue: 'Personal Risk'},
    {value: 'botnets', viewValue: 'Botnets'},
    {value: 'mass_malware', viewValue: 'Mass Malware'},
    {value: 'vulnerability', viewValue: 'Vulnerability'},
    {value: 'phishing_social_engineering', viewValue: 'Phishing Social Engineering'},
    {value: 'customized_to_target', viewValue: 'Customized to target'},
    {value: 'all', viewValue: 'All'},
  ]

  constructor(private metricService: MetricService) {
    this.metricService.getChartLabels().subscribe((res: any) => {
      this.lineChartLabels = res;
      console.log(this.lineChartLabels);
    });

    this.metricService.getChartData('all').subscribe((res: any) => {
      // console.log(res);
      this.lineChartData = res;
      console.log(this.lineChartData);
      this.chartReady = true;
    });
  }

  ngOnInit() {
  }

  onChangedSort(event: any) {
    // console.log(event.value);
    this.metricService.getChartData(event.value).subscribe((res: any) => {
      // console.log(res);
      this.lineChartData = res;
      console.log(this.lineChartData);
      this.chartReady = true;
    });
  }
  


}
