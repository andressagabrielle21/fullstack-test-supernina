import {Component, Input, OnInit} from "@angular/core"
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../button/button.component";
import { DataService } from "../../app.service";

@Component({
  selector: "list-component",
  standalone: true,
  templateUrl: "./list.component.html",
  imports: [RouterLink, ButtonComponent]
})

export class ListComponent implements OnInit{
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
