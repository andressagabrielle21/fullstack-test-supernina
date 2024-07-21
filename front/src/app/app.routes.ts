import {Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';

export const routes: Routes = [
  {
    path: '',
    title: 'SuperNina Dashboard',
    component: DashboardComponent
  },
  {
    path: 'complaint',
    title: 'Complaint #1',
    component: ComplaintComponent
  }
];
