import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreatedDecorator = new EventEmitter<{ isTemplete: boolean, serverName: string, serverContent: string }>();
  @Output() blueprintCreatedDecorator = new EventEmitter<{ isTemplete: boolean, serverName: string, serverContent: string }>();
//@Output is a event handler for  handle event from child compoennt to sent parent component and parent compoentn use this sended event and trigger it.
  @Output() serverCreatedTemplete = new EventEmitter<{isTemplete: boolean, serverName: string, serverContent: string }>();
  @Output() blueprintCreatedTemplete = new EventEmitter<{isTemplete: boolean, serverName: string, serverContent: string }>();
  isTemplete = true;
  newServerContent: '';
  newServerName = '';

  @ViewChild('templeteServerName') serverContentInput: ElementRef ; // we can access html templete references and use it in compoennet

  constructor() {
    console.log('is templere' + this.isTemplete)
  }

  ngOnInit(): void {
    console.log(this.isTemplete)
  }

  onAddServerDecorator() {
    console.log(this.isTemplete)
    this.serverCreatedDecorator.emit(
      {
        isTemplete :this.isTemplete,
        serverContent: this.newServerContent,
        serverName: this.newServerName
      });
  }

  onAddBlueprintDecorator() {
    console.log(this.isTemplete)
    this.blueprintCreatedDecorator.emit({
      isTemplete :this.isTemplete,
      serverContent: this.newServerContent,
      serverName: this.newServerName
    });
  }

  onAddServerTemplete(name, content) {
    console.log(name.value + ' ' + content.value)
    this.serverCreatedTemplete.emit(
      {
        isTemplete :this.isTemplete,
        serverContent: this.serverContentInput.nativeElement.value,
        serverName: name.value
      });
  }

  onAddBlueprintTemplete(name: HTMLInputElement, content: HTMLInputElement) {
    console.log(this.serverContentInput) // usefulll
    console.log(name.value + ' ' + content.value)
    this.blueprintCreatedTemplete.emit({
      isTemplete :this.isTemplete,
      serverContent: this.serverContentInput.nativeElement.value, // @ViewChild use like this..
      serverName: name.value
    });
  }


}
