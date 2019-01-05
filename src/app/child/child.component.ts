import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public textMsg;

  //for to pass data chid componenet to app component
  @Output() public MyEvent = new EventEmitter();

  //Function for Child Click to get data from input
  public SendEvent()
  {
  // Send the event to parent
    this.MyEvent.emit(this.textMsg);
  }
  constructor() { }

  ngOnInit() {
  }

}
