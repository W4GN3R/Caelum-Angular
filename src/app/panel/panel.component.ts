import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() title: String;
  
  constructor() { }

  ngOnInit() {
    this.title = (this.title || '').length ? `${this.title.substr(0, 7)}...` : this.title 
  }

}
