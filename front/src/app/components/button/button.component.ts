import { NgClass } from "@angular/common";
import {Component, Input} from "@angular/core";

@Component({
  selector: "button-component",
  standalone: true,
  templateUrl: "./button.component.html",
  imports: [NgClass]
})

export class ButtonComponent {
  @Input() buttonName = '';
  @Input() theme = '';
}