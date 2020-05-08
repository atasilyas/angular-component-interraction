import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {isTemplete: true, type: 'server', name: 'TestServer', content: 'just a test'},
    {isTemplete: false, type: 'blueprint', name: 'TestServer', content: 'just a test'}
  ];

  onServerAddedDecorator(serverData:{isTemplete: boolean, serverName: string, serverContent: string}) {
    console.log(serverData)
    this.serverElements.push({
      isTemplete: serverData.isTemplete,
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAddedDecorator(blueprintData: {isTemplete: boolean, serverName: string, serverContent: string}) {
    console.log(blueprintData)
    this.serverElements.push({
      isTemplete: blueprintData.isTemplete,
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onServerAddedTemplete(serverData:{isTemplete: boolean, serverName: string, serverContent: string}) {
    this.serverElements.push({
      isTemplete: serverData.isTemplete,
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAddedTemplete(blueprintData: {isTemplete: boolean, serverName: string, serverContent: string}) {
    this.serverElements.push({
      isTemplete: blueprintData.isTemplete,
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
