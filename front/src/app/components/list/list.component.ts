import {Component, Input, OnInit} from "@angular/core"
import { ButtonComponent } from "../button/button.component";
import { DataService } from "../../app.service";

@Component({
  selector: "list-component",
  standalone: true,
  templateUrl: "./list.component.html",
  imports: [ButtonComponent]
})

export class ListComponent implements OnInit{
  // @Input() id = '';
  // @Input() neighborhood = '';
  // @Input() date = '';
  // @Input() type = '';

  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
