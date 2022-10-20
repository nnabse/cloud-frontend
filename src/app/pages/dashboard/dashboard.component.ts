import { Component, OnInit } from '@angular/core';
import { IconsList } from '@constants/icons.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public icons = IconsList;

  constructor() {}

  ngOnInit(): void {}
}
