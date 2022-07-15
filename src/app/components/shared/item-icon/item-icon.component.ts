import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-icon',
  templateUrl: './item-icon.component.html',
  styleUrls: ['./item-icon.component.css'],
})
export class ItemIconComponent {
  @Input() item: any = {};
  constructor() {}
}
