import {Component} from "@angular/core"
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "list-component",
  standalone: true,
  templateUrl: "./list.component.html",
  imports: [ButtonComponent]
})

export class ListComponent{}