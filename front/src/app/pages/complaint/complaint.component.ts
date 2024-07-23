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
  @Input() id = '';

  data: any;
  complaint: any

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      this.complaint = this.data.complaints.find((item: any) => item.id === this.id);
    });
  }
  
  // logMessage(): void {
  //   console.log(this.complaint);
  // }
}