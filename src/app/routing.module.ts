import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerformanceComponent } from './components/performance/performance.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
