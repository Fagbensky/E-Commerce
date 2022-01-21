import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() classList?: string;
  @Input() icon?: any;
  @Input() title?: string;
  @Input() paragraph?: string;

}
