import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { saveRecentColors } from '../../shared/utils';

@Component({
  selector: 'd-recent-color',
  templateUrl: './recent-color.component.html',
  styleUrls: ['./recent-color.component.scss']
})
export class RecentColorComponent implements OnInit {
  @Input() color;
  @Output() colorChange = new EventEmitter();
  recentlyUsed: Array<string> = ['#fff'];

  constructor() { }

  ngOnInit() {
  }

  saveRecentlyUsed() {
    saveRecentColors(this.recentlyUsed, this.color);
  }

  sendColor(color) {
    this.colorChange.emit(color);
  }
}
