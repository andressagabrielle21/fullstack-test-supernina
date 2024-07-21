import { Component, Input } from '@angular/core';

@Component({
  selector: 'complaint',
  standalone: true,
  templateUrl: './complaint.component.html',
})
export class ComplaintComponent {
  @Input() complaintId = '';
}