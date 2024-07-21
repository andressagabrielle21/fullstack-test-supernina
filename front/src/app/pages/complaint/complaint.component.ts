import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'complaint',
  standalone: true,
  templateUrl: './complaint.component.html',
  imports: [ButtonComponent, RouterLink]
})
export class ComplaintComponent {
  @Input() complaintId = '';
}