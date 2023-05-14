import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FubukiNodeService } from '../fubuki/fubuki.service';
import { Observable } from 'rxjs';
import { NodeInfoListItem } from '../fubuki/types/NodeInfoListItem';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {

  constructor(
    private fubukiNodeService: FubukiNodeService
  ) {
    
  }

  ngOnInit(): void {
    this.groupList = this.fubukiNodeService.getGroupList();
  }

  groupList!: Observable<NodeInfoListItem[]>;

}
