import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { DashboardVizApiComponent } from './components/dashboard-viz-api/dashboard-viz-api.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'dashboard-viz-api', component: DashboardVizApiComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
