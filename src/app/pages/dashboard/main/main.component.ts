import { Component } from '@angular/core';
import { IconsList } from '@constants/icons.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public icons = IconsList;
}
