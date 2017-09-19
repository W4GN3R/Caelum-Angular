import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() title: string;
  @Input() img: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
