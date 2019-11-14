import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RationaleComponent } from './rationale/rationale.component';
import { RespondentsComponent } from './respondents/respondents.component';
import { SurveyComponent } from './survey/survey.component';
import { CvedataComponent } from './cvedata/cvedata.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { AnalysisComponent } from './analysis/analysis.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'rationale',
    component: RationaleComponent
  },
  {
    path: 'respondents',
    component: RespondentsComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: 'cvedata',
    component: CvedataComponent
  },
  {
    path: 'calculations',
    component: CalculationsComponent
  },
  {
    path: 'analysis',
    component: AnalysisComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
