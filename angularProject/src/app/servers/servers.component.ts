import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName:string = "Test server"
  showServer:boolean = false;
  isDisabled:boolean = false;

  servers = ['test server 1','server 2']
  constructor() { 
    setTimeout(() => {
        this.isDisabled = true;
    }, 3000);
  }

  ngOnInit() {
  }
  addServer(){
    this.showServer = true;
    this.servers.push(this.serverName)
  }
}
