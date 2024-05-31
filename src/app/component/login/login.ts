import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrl: './login.scss'
  })
export class ChildComponent {
    @Input()
    parentText = ''
    @Output()
    childEvent = new EventEmitter<string>();

    setData(){
        this.childEvent.emit('Login button clicked!');
    }
}