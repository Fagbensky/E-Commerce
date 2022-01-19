import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() title?: string;
  @Input() paragraph?: string;
  @Input() icon?: any;


}
