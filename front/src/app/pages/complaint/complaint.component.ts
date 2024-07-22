import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';
import { DataService } from '../../app.service';

@Component({
  selector: 'complaint',
  standalone: true,
  templateUrl: './complaint.component.html',
  imports: [ButtonComponent, RouterLink]
})
export class ComplaintComponent implements OnInit{
  @Input() complaintId = '';

  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe(params => {
  //     const id = params['id'];
  //     this.loadComplaint(id);
  //   });
  // }

  // loadComplaint(id: string): void {
  //   this.dataService.getComplaintById(id).subscribe(response => {
  //     this.data.complaints.complaintId = response;
  //   });
  // }
}