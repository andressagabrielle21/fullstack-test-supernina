import { Component } from "@angular/core"
import {RouterOutlet, RouterLink} from "@angular/router"
import { ButtonComponent } from "../../components/button/button.component"

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [RouterOutlet, RouterLink, ButtonComponent]
})

export class DashboardComponent {}