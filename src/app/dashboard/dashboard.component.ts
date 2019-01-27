import { Component, OnInit } from '@angular/core';
import { GroupService } from './group/group.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  groups: [];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
    console.log(this.groups);
  }

}
