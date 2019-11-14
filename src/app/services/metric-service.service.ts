import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  backendUrl: string = environment.backendUrl;

  constructor(private httpClient: HttpClient) { }

  getYearWiseDate(year: string) {
    return this.httpClient.get(this.backendUrl + year);
  }

  getCVEDateByMonth(month: string, year: string) {
    console.log(this.backendUrl + 'getCVEEntity/' + month + '/' + year);
    return this.httpClient.get(this.backendUrl + 'getCVEEntity/' + month + '/' + year );
  }

  getSurveyDataByMonth(month: string, year: string) {
    return this.httpClient.get(this.backendUrl + 'getSurveyDataByMonth/' + year + '/' + month);
  }

  getSubIndexByTopic(topic: string, month: string, year: string) {
    return this.httpClient.get(this.backendUrl + 'getSubIndex/' + topic + '/' + month + '/' + year);
  }

  getSubIndexDifference(topic: string) {
    return this.httpClient.get(this.backendUrl + 'getSubIndexDifference/' + topic);
  }

  getChartData(value: string) {
    return this.httpClient.get(this.backendUrl + 'chartAllData/' + value);
  }

  getChartLabels() {
    return this.httpClient.get(this.backendUrl + 'getChartLabels');
  }
  
}
