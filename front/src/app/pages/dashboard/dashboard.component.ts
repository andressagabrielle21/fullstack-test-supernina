
import { Component, OnInit } from "@angular/core"
import {RouterLink} from "@angular/router"
import { ButtonComponent } from "../../components/button/button.component"
import { ListComponent } from "../../components/list/list.component"
import { DataService } from "../../app.service"

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [RouterLink, ButtonComponent, ListComponent]
})

export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }

  //TESTE
  logMessage(): void {
    for (const { id, neighborhood } of this.data.complaints) {
      console.log(`ID: ${id}, BAIRRO: ${neighborhood}`);
    }
  }
}