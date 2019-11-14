import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RationaleComponent } from './rationale/rationale.component';
import { MetricService } from './services/metric-service.service';

import { DemoMaterialModule } from '../material.module';
import { CalculationsComponent } from './calculations/calculations.component';
import { RespondentsComponent } from './respondents/respondents.component';
import { SurveyComponent } from './survey/survey.component';
import { CvedataComponent } from './cvedata/cvedata.component';
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    RationaleComponent,
    CalculationsComponent,
    RespondentsComponent,
    SurveyComponent,
    CvedataComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    ChartsModule
  ],
  providers: [
    MetricService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
