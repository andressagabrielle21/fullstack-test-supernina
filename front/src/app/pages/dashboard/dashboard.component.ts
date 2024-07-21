import { Component } from "@angular/core"
import {RouterOutlet, RouterLink} from "@angular/router"
import { ButtonComponent } from "../../components/button/button.component"
import { ListComponent } from "../../components/list/list.component"

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [RouterLink, ButtonComponent, ListComponent]
})

export class DashboardComponent {}