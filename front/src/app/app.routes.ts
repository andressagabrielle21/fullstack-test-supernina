import { Routes, UrlSegment } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';

export const routes: Routes = [
  {
    path: '',
    title: 'SuperNina Dashboard',
    component: DashboardComponent
  },
  {
    path: 'complaint:id',
    title: 'Complaint {{complaint.id}}',
    component: ComplaintComponent
  },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {consumed: url, posParams: {id: new UrlSegment(url[0].path.slice(1), {})}};
      }
      return null;
    },
    component: ComplaintComponent,
  },
];
