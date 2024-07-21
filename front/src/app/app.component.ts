import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DashboardComponent]
})

export class AppComponent {
  title = 'SuperNina';
}