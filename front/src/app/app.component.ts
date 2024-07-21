import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {RouterOutlet, RouterLink} from "@angular/router"
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, DashboardComponent]
})

export class AppComponent {
  title = 'SuperNina';
}