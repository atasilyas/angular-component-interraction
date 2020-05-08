import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // @Input() element: { type: string, name: string, content: string };
  @Input() serverElement: { isTemplete: boolean, type: string, name: string, content: string };

  decoratorElement: { isTemplete: boolean, type: string, name: string, content: string };
  templeteElement: { isTemplete: boolean, type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
      if (this.serverElement.isTemplete === true) {
        this.templeteElement = this.serverElement;
      } else {
        this.decoratorElement = this.serverElement;
      }
    }


}
