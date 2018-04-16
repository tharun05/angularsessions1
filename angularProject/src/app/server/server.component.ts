import {Component} from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'server.component.html',
    styleUrls:['server.component.css']
})

export class ServerComponent{
    serverId:number = 20;
    ServerName:string = 'Test server';
    serverStatus:string = 'online';
    inputData:string;

    isDisabled:boolean = true;
    constructor(){
       setTimeout(() => {
           this.isDisabled = false;
       }, 3000);
    }
    inputFunction(e){
        this.inputData = (<HTMLInputElement>e.target).value;
        console.log(this.inputData)
    }
}