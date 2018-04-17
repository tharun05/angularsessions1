import {Component} from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'server.component.html',
    styles:[`
        .online{
            color:#fff;
        }
    `]
})

export class ServerComponent{
    serverId:number = 20;
    ServerName:string = 'Test server';
    serverStatus:string = 'online';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    
 
}