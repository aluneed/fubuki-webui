import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { NodeInfoListItem } from './types/NodeInfoListItem';
import { NodeInfo } from './types/NodeInfo';

@Injectable({
  providedIn: 'root'
})
export class FubukiNodeService {

  constructor(private http: HttpClient) {

  }

  groupColumns = ["group_name", "node_name", "addr", "server_addr", "server_is_connected"]
  nodeColumns = ["name", "virtual_addr", "lan_udp_addr", "wan_udp_addr"]

  info!: NodeInfoListItem[];

  getInfo() {
    this.http.get('/info')
      .subscribe(info => {
        this.info = <NodeInfoListItem[]> info;
        // console.log(this.info);
        // console.log(Object.values(this.info[0]["node_map"]));
      });
  }

  getGroupList(): Observable<NodeInfoListItem[]> {
    //https://rxjs.dev/deprecations/to-promise
    // return lastValueFrom(this.http.get("/info"));

    return this.http.get("/info") as Observable<NodeInfoListItem[]>;
  }
  
}
